const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
const {ContactModel} = require("./Models/Contact.model");
require('dotenv').config()
const {connection} = require('./Config/db');
const { NotesModel } = require('./Models/Notes.model');
const { UserModel } = require('./Models/User.model');
const jwt = require("jsonwebtoken");
const {authenticateToken} = require('./utilities');
const { restart } = require('nodemon');


const app = express();

//middleware
app.use(cors({origin : "*"}));
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



// **************************** BACKEND APIs ******************************* //

// Create Account
app.post("/create-account", async (req,res) => { 

    const {fullname, email, password} = req.body;
    
    if(!fullname){
        return res
        .status(400)
        .json({error : true, message : "Fullname is Required!!"})
    }

    if(!email){
        return res
        .status(400)
        .json({error : true, message : "Email is Required!!"})
    }

    if(!password){
        return res
        .status(400)
        .json({error : true, message : "Password is Required!!"})
    }


    const isUser = await UserModel.findOne({email:email});

    if(isUser){
        return res.json({
            error : true,
            message : "User already exist!!"
        })
    }

    const user = new UserModel({
        fullname,
        email,
        password
    })
    
    await user.save();

    const accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn : "300m"
    });

    return res.json({
        error : false,
        user,
        accessToken,
        message : "Registration Successful!!"
    });
})

// Login User
app.post("/login", async (req,res) => { 
    const {email, password} = req.body;

    if(!email){
        return res.status(400).json({message : "Email is Required!!"});
    }

    if(!password){
        return res.status(400).json({message : "Password is Required!!"});
    }

    const userInfo = await UserModel.findOne({email : email});
    if(!userInfo){
        return res.status(400).json({message : "User Not Found!!"});
    }

    if(userInfo.email == email && userInfo.password == password){
        const user = {user : userInfo};
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn : "36000m"
        });

        return res.json({
            error:false,
            message : "Login Successful!!",
            email,
            accessToken
        });
    } else {
        return res.status(400).json({
            error : true,
            message : "Invalid Credentials!!"
        });
    }
});

// Get User
app.get("/get-user", authenticateToken, async (req,res) => { 
    const {user} = req.user;

    const isUser = await UserModel.findOne({_id : user._id});

    if(!isUser){
        return res.sendStatus(401);
    }

    return res.json({
        user : {
            fullname : isUser.fullname,
            email : isUser.email,
            "_id" : isUser._id,
            createdOn : isUser.createdOn
        },
        message : ""
    });
});

// Add Note
app.post("/add-note",authenticateToken, async (req,res) => { 

    const {title, content, tags} = req.body;
    const {user} = req.user;

    if(!title){
        return res.status(400).json({
            error : true,
            message : "Title is Required!!"
        });
    }
    if(!content){
        return res.status(400).json({
            error : true,
            message : "Content is Required!!"
        });
    }

    try {
        const note = new NotesModel({
            title,
            content,
            tags : tags || [],
            userId : user._id
        });

        await note.save();

        return res.json({
            error : false,
            note,
            message : "Note Added Successfully!!"
        });

    } catch (error) {
        
        return res.status(500).json({
            error : true,
            message : "Internal Server Error!!"
        });

    }

});

// Edit Note
app.put("/edit-note/:noteId", authenticateToken, async (req,res) => {

    const noteId = req.params.noteId;
    const {title, content, tags, isPinned} = req.body;
    const {user} = req.user;
    console.log(noteId);
    

    if(!title && !content && !tags){
        return res.status(400).json({
            error : true,
            message : "No Changes Provided!!"
        });
    }

    try {
        
        const note = await NotesModel.findOne({_id : noteId, userId : user._id});

        if(!note){
            return res.status(404).json({
                error : true, 
                message : "Note Not Found!!"
            });
        }

        if(title){
            note.title = title;
        }
        if(content){
            note.content = content;
        }
        if(tags){
            note.tags = tags;
        }
        if(isPinned){
            note.isPinned = isPinned;
        }

        await note.save();

        return res.json({
            error : false,
            note,
            message : "Note Updated Successfully!!"
        });

    } catch (error) {

        console.error(error);
        
        return res.status(500).json({
            error :true,
            message : "Internal Server Error!!"
        });

    }

});

// Get All Notes
app.get("/get-notes", authenticateToken, async (req,res) => { 
    const {user} = req.user;
    
    try {
        const notes = await NotesModel.find({userId : user._id}).sort({isPinned : -1});

        return res.json({
            error : false,
            notes,
            message : "All notes retrieved Successfully!!"
        });
    } catch (error) {
        return res.status(500).json({
            error : true,
            message : "Internal Server Error!!"
        });
    }
});

// Delete Note
app.delete("/delete-note/:noteId", authenticateToken, async (req,res) => { 
    const noteId = req.params.noteId;
    const {user} = req.user;

    try {
        const note = await NotesModel.findOne({_id : noteId, userId : user._id});

        if(!note){
            return res.status(404).json({
                error : true,
                message : "Note not Found!!"
            });
        }
        await NotesModel.deleteOne({_id : noteId, userId : user._id});

        return res.json({
            error : false,
            message : "Note Deleted Sucessfully!!"
        });

    } catch (error) {
        return res.status(500).json({
            error : true,
            message : "internal Server Error!!"
        });
    }
});

// Update isPinned
app.put("/update-note-pinned/:noteId", authenticateToken, async (req,res) => { 
    const noteId = req.params.noteId;
    const {isPinned} = req.body;
    const {user} = req.user;
    

    try {
        
        const note = await NotesModel.findOne({_id : noteId, userId : user._id});

        if(!note){
            return res.status(404).json({
                error : true, 
                message : "Note Not Found!!"
            });
        }

        note.isPinned = isPinned;

        await note.save();

        return res.json({
            error : false,
            note,
            message : "Pin Toggled Successfully!!"
        });

    } catch (error) {
        
        return res.status(500).json({
            error :true,
            message : "Internal Server Error!!"
        });

    }
});


// Start Server
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


module.exports = app;