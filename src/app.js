const express = require("express");
const path = require("path");
const hbs = require("hbs");
const { LogInCollection, ContactCollection, DonateFoodCollection } = require("./db/conn");
require("./db/conn");

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at port number ${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const static_path = path.join(__dirname, "../public");
const view_path = path.join(__dirname, "../views");
const partials_path = path.join(__dirname, "../partials");

app.use(express.static(static_path));
app.set("view engine", "hbs");
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/donatefood", (req, res) => {
    res.render("donatefood");
});
app.get("/blogs", (req, res) => {
    res.render("blogs");
});

app.post("/donatefood", async (req, res) => {
    try {
        const data = {
            name3: req.body.name3,
            email3: req.body.email3,
            phone: req.body.phone,
            address:req.body.address,
            donationtype:req.body.donationtype,
            quantity:req.body.quantity,
            pickup:req.body.pickup,
            datetime:req.body.datetime,
        };
        await DonateFoodCollection.create(data);
        res.render("home");
    } catch (error) {
        console.error("Error saving Donor:", error);
        res.status(500).send("Error occurred while saving Donor.");
    }
});

app.post("/contact", async (req, res) => {
    try {
        const data = {
            name1: req.body.name1,
            email1: req.body.email1,
            message: req.body.message
        };
        await ContactCollection.create(data);
        res.render("home");
    } catch (error) {
        console.error("Error saving contact:", error);
        res.status(500).send("Error occurred while saving contact.");
    }
});

app.post("/signup", async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            password: req.body.password,
            role: req.body.role,
            email: req.body.email
        };
        await LogInCollection.create(data);
        res.render("home");
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).send("Error occurred while saving user.");
    }
});

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await LogInCollection.findOne({ email });
        if (!user) {
            res.send("User not found");
            return;
        }
        if (user.password === password) {
            res.render("home");
        } else {
            const wrong = `<h1>Sorry,You Have Entered Wrong Details<h1/>`
            res.send(wrong);
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("An error occurred during login.");
    }
});


