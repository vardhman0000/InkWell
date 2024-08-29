const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
const {ContactModel} = require("./Models/Contact.model");
require('dotenv').config()
const {connection} = require('./Config/db');
const { NotesModel } = require('./Models/Notes.model');
const { UserModel } = require('./Models/User.model');

const app = express();

//middleware
app.use(cors());
app.use(express.json());


// app.get('/contact',async(req,res) =>{
//     const alldata = await Contact.find({});
//     console.log(alldata);
//     res.send(alldata);
//     //Data sent to client Side 
// });

app.post('/contact',async(req,res)=>{
    try{
        let contact = new ContactModel(req.body);
        await contact.save();
        res.status(200).send({msg:'Data Recieved',data:req.body});
    }
    catch(err){
        console.error(err);
        res.status(500).send("Something went wrong!!")
        
    }
    // console.log(req.body);
    // res.send({msg:'Data Recieved',data:req.body});
    // await Contact.create({
    //     name:req.body.name,
    //     email:req.body.email,
    //     message:req.body.message
    // })
});

app.post("/addUser", async (req,res) => { 
    try {
        let user = new UserModel(req.body);
        await user.save();
        res.status(200).send({msg:'User Created!!',data:req.body});
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating user: " + error.message);
    }
 });

app.post("/addNote", async (req,res) => { 
    
    try {
        let note = new NotesModel(req.body);
        await note.save();
        res.status(200).send({msg:'Note Saved',data:req.body});
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving note: " + error.message);
    }
 });

app.listen(process.env.PORT, async () => { 
    try {
        await connection; // Connect to Database on Starting the Server
        console.log("DB Connected!!");
        
    }
    catch(err){
        console.log("Connection not Established!!");
        console.error(err);
    }
    console.log(`Server started at port ${process.env.PORT}!!`);
})

// mongoose.connect('mongodb+srv://vardhman0000:vardhmanjain@cluster0.1sfltug.mongodb.net/inkwell?retryWrites=true&w=majority&appName=Cluster0')
// .then(()=>{
//     console.log("connection successful");
// })
// .catch((err)=>{
//     console.log("Connection failed ");
//     console.log(err);
// });
