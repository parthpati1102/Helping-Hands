const mongoose = require("mongoose");
  const DB = `mongodb+srv://parth:lMvbIxcdHL1trLYs@cluster0.j5mtk4w.mongodb.net/minorproject?retryWrites=true&w=majority`;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() =>{
    console.log(`Connection Successfull`);
}).catch((err) => {
    console.log(`no Connection`);
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection

const contactSchema = new mongoose.Schema({
    name1:{
        type:String
    },
    email1:{
        type:String
    },
    message:{
        type:String
    }
})
const ContactCollection = new mongoose.model('ContactCollection' ,contactSchema)
module.exports = ContactCollection
