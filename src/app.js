const express = require("express");
const path = require("path");
const hbs = require("hbs");
const { LogInCollection,SignUpCollection, ContactCollection, DonateFoodCollection,VolunteerCollection } = require("./db/conn");
require("./db/conn");
const methodOverride = require('method-override');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at port  ${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true } // Set to true if using HTTPS
}));

const static_path = path.join(__dirname, "../public");
const view_path = path.join(__dirname, "../views");
const partials_path = path.join(__dirname, "../partials");

app.use(express.static(static_path));
app.set("views" , view_path);
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

app.get("/signin", (req, res) => {
    res.render("signin");
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
app.get("/gallery", (req, res) => {
    res.render("gallery");
});

app.get("/donate", (req, res) => {
    res.render("donate");
});
// app.get("/ngopage", (req, res) => {
//     res.render("ngopage");
// });

app.post("/volunteer", async (req, res) => {
    try {
        const data = {
            volname: req.body.volname,
            volemail: req.body.volemail,
            volmsg: req.body.volmsg,
            message_at: new Date()
        };
        await VolunteerCollection.create(data);
        res.render("home");
    } catch (error) {
        console.error("Error saving contact:", error);
        res.status(500).send("Error occurred while saving contact.");
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
            email: req.body.email,
            age: req.body.age
        };
        await LogInCollection.create(data);
        res.render("home");
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).send("Error occurred while saving user.");
    }
});
app.post("/signin", async (req, res) => {
    try {
        const data = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            phonenumber: req.body.phonenumber,
            gender: req.body.gender,
            tanNumber: req.body.tanNumber,
            panNumber: req.body.panNumber,
            organisationname : req.body.organisationname,
            address : req.body.address,
            city : req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode,
        };
        await SignUpCollection.create(data);
        res.render("home");
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).send("Error occurred while saving user.");
    }
});

let loggedInNGO = null;


const SESSION_EXPIRATION_TIME = 1 * 60 * 1000; 

app.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await SignUpCollection.findOne({ email });

        if (!user) {
            res.send("User not found");
            return;
        }

        if (user.password === password) {
            if (loggedInNGO) {
                let show = `<h2>Another NGO is already logged in. Please try again later.</h2>`
                res.send(show);
                return;
            }

            loggedInNGO = user;
            // console.log(loggedInNGO);
             
            req.session.cookie.expires = new Date(Date.now() + SESSION_EXPIRATION_TIME);

            res.redirect("/ngopage");
        } else {
            const wrong = `<h1>Sorry, You have entered wrong details<h1/>`;
            res.send(wrong);
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("An error occurred during login.");
    }
});

app.get("/logout", (req, res) => {
    if (loggedInNGO) {
        loggedInNGO = null;
        req.session.destroy((err) => {
            if (err) {
                console.error("Error while destroying session:", err);
                res.status(500).send("An error occurred during logout.");
                return;
            }
            res.redirect("/");
        });
    } else {
        res.redirect("/");
    }
});

// app.get("/logout", (req, res) => {
//     req.session.destroy((err) => {
//         if (err) {
//             console.error("Error while destroying session:", err);
//             res.status(500).send("An error occurred during logout.");
//             return;
//         }
//         res.redirect("/");
//     });
// });



app.get("/ngopage", async (req, res) => {
    try {
        let donateitems = await DonateFoodCollection.find();
        let volunteer = await VolunteerCollection.find();

    
        if (loggedInNGO) {
    
            //  loggedInNGO = req.session.loggedInNGO;
             
            const organisationname = loggedInNGO.organisationname;
            const phonenumber = loggedInNGO.phonenumber;
            const address = loggedInNGO.address;
            const state = loggedInNGO.state;
            const city = loggedInNGO.city;
            const email = loggedInNGO.email;
            const firstname = loggedInNGO.firstname;
            const lastname = loggedInNGO.lastname;
            const panNumber = loggedInNGO.panNumber;
            const tanNumber = loggedInNGO.tanNumber;
    
            res.render("ngomain", { organisationname,phonenumber,address, donateitems,state,city,email,firstname,lastname,panNumber,tanNumber, volunteer});
        } else {
            res.render("ngomain", { organisationname: 'NGO NAME', donateitems, volunteer });
        }
    } catch (error) {
        console.error("Error rendering ngopage:", error);
        res.status(500).send("An error occurred while rendering ngopage.");
    }
});

app.post("/ngopage", (req, res) => {
    try {

        if (req.body.donationtype && req.body.quantity) {

            const anonymous = req.body.anonymous === 'on';
            
            const newData = new DonateFoodCollection({
                name3: req.body.name3,
                email3: req.body.email3,
                phone: req.body.phone,
                address: req.body.address,
                donationtype: req.body.donationtype,
                quantity: req.body.quantity,
                anonymous:anonymous,
                donated_at: new Date(),
            });

            newData.save()
                .then(() => {
        
                    res.redirect("/");
                })
                .catch((err) => {
                    console.error("Error saving donation data:", err);
                    res.status(500).send("Error occurred while saving donation data.");
                });
        } else {

            const newVolunteer = new VolunteerCollection({
                volname: req.body.volname,
                volemail: req.body.volemail,
                volmsg: req.body.volmsg,
                message_at: new Date(),
            });


            newVolunteer.save()
                .then(() => {
            
                    res.redirect("/");
                })
                .catch((err) => {
                    console.error("Error saving volunteer data:", err);
                    res.status(500).send("Error occurred while saving volunteer data.");
                });
        }
    } catch (error) {
        console.error("Error in request:", error);
        res.status(500).send("An error occurred in the request.");
    }
});
app.delete("/ngopage/:id" , async (req,res) =>{
    let {id} = req.params;
    try {

        const donation = await DonateFoodCollection.findById(id);
        const volunteer = await VolunteerCollection.findById(id);


        if (donation) {
            await DonateFoodCollection.findByIdAndDelete(id);
            res.redirect("/ngopage");
        } else if (volunteer) {
            await VolunteerCollection.findByIdAndDelete(id);
            res.redirect("/ngopage");
        } else {
            res.status(404).send("Item not found");
        }
    } catch (error) {
        console.error("Error deleting item:", error);
        res.status(500).send("An error occurred while deleting item.");
    }
});