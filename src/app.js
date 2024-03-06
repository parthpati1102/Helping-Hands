const express = require("express");
const path = require("path");
const hbs = require("hbs");
const collection = require("./db/conn")
require("./db/conn");
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// app.get("/",(req,res)=>{
//     res.render("index")
// })
app.get("/",(req,res)=>{
    res.render("home")
})


app.get("/login",(req,res)=>{
    res.render("login")
})
// app.get("/login",(req,res)=>{
//     res.render("login")
// })

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})

app.get("/about",(req,res)=>{
    res.render("about")
})


app.post("/signup" , async(req,res)=>{
     
    const data={
        name:req.body.name,
        password:req.body.password,
        role:req.body.role,
        email:req.body.email
    }

    await collection.insertMany([data])

    res.render("home")
})
  
app.post('/login', async (req, res) => {

    try {
        const check = await collection.findOne({ email: req.body.email})

         if (check.password === req.body.password) {
            res.render("home");
         }
         else {
             res.send("incorrect password")
         }


    } 
    
    catch (e) {
         res.send("wrong details")
    }


})

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname , "../public")
const view_path = path.join(__dirname , "../views")
const partials_path = path.join(__dirname , "../partials")

app.use(express.static(static_path));
app.set("view engine" , "hbs");
hbs.registerPartials(partials_path);

// app.get("/", (req, res) => {
//     res.render("index");
// });


app.listen(port, () => {
    console.log(`Server is running at port number ${port}`);
});






