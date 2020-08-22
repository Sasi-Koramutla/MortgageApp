const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const PORT = process.env.PORT || 3003;
const mongodb_URI = process.env.MONGODB_URI  || 'mongodb://localhost:27017/mortgageappaug13';
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const userModel = require('./models/user.js');
const TOKEN_SECRET = process.env.SECRET  || "SECRET_MORTGAGEAPP";
const backend_url = process.env.REACT_APP_BACKEND_URL_CONFIRM || "http://localhost:3003/confirm";

//nodemailer logic from nodemailer.com
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "mortgageappaugust@gmail.com", // generated ethereal user
      pass: "mortgage00!", // generated ethereal password
    },
  });

// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect(mongodb_URI, { useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false})
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})

app.get("/confirm/:id", (req,res) => {
  userModel.findByIdAndUpdate(req.params.id, {$set: {validated: true }}, (err, updatedUser) => {
      if(err){
        res.status(400).json({ error: err.message });
      }
      if(updatedUser)
      {
        res.redirect("https://master.d3acagn19vzppe.amplifyapp.com/");
        } 
      });
   //res.status(401).json({message:"Invalid Username/Password"});
});

// middleware
app.use(express.json());
app.use(express.static(path.join("public/build")));

//GET Route
/* app.get("/", (req,res) => {
  res.send("Mortgage App");
}); */

const whitelist = ['http://localhost:3000/', 'https://mail.google.com/', 'smtp.gmail.com', 'http://localhost:3000', 'https://master.d3acagn19vzppe.amplifyapp.com/', 'https://master.d3acagn19vzppe.amplifyapp.com'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) >= 0) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};  
app.use(cors(corsOptions)); 

 // CREATE ROUTE
app.post('/mortgage', (req, res) => {
  console.log(req.body);
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    userModel.create(req.body, (error, createdMortgageApp) => {
      if (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
      }
      res.status(200).send(createdMortgageApp);
      console.log(backend_url);
      transporter.sendMail({
        from: '"Mortgage App" <mortgageappaugust@gmail.com>', // sender address
        to: "sasidhar.kmv@gmail.com, `req.body.username` ", // list of receivers
        subject: "Mortgage App - Verify email address - " + req.body.firstName, // Subject line
        text: "Please validate your email", // plain text body
        html: "Please validate your email by clicking the link below. <br/>" + backend_url + "/" + createdMortgageApp.id, // html body
      }); 
      console.log(createdMortgageApp);
    })
  });

// LOGIN ROUTE
app.post('/mortgage/login', (req, res) => {
  console.log(req.body);
    userModel.findOne({username:req.body.username}, (err, foundUser) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      console.log("success");
      console.log(foundUser);
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        let token = jwt.sign(
          { userId: foundUser.id, username: foundUser.username},
          TOKEN_SECRET,
          { expiresIn: '1h' });
        res.status(200).json({
          id: foundUser.id, 
          username: foundUser.username,
          password:foundUser.password,
          token: token,
          address: foundUser.address,
          city: foundUser.city,
          state: foundUser.state,
          zip: foundUser.zip,
          description: foundUser.description,
          yearBuilt: foundUser.yearBuilt,
          loanPurpose: foundUser.loanPurpose,
          ssn: foundUser.ssn,
          validated:foundUser.validated
        });

    } else {
        res.status(401).json({message:"Invalid Username/Password"});
    }
     
    })
  });

  //PUT ROUTE
  app.put("/mortgage", (req, res) => {
    console.log(req.body);
      userModel.findByIdAndUpdate(req.body.id, {$set: {address: req.body.address,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip,
          description: req.body.description,
          yearBuilt: req.body.yearBuilt,
          loanPurpose: req.body.loanPurpose,
          ssn: req.body.ssn }}, (err, updatedUser) => {
            if(err){
              res.status(400).json({ error: err.message });
            }
            if(updatedUser)
            {
              console.log("success");
              //setTimeOut(console.log(updatedUser),4000);

              res.status(200).json({
              id: updatedUser.id, 
              address: req.body.address,
              city: req.body.city,
              state: req.body.state,
              zip: req.body.zip,
              description: req.body.description,
              yearBuilt: req.body.yearBuilt,
              loanPurpose: req.body.loanPurpose,
              ssn: req.body.ssn});  
              console.log("updated user");
              } 
            });
         //res.status(401).json({message:"Invalid Username/Password"});
     
    });

    app.get("/mortgage/:username", (req, res) => {
      console.log(req.params.username);
        userModel.findOne({username:req.params.username}, (err, foundUser) => {
          if (err) {
            res.status(400).json({ error: err.message })
          }
          console.log("success");
          console.log(foundUser);
          if (foundUser) {
            res.status(200).json({
              id:foundUser.id,
              address: foundUser.address,
              city: foundUser.city,
              state: foundUser.state,
              zip: foundUser.zip,
              description: foundUser.description,
              yearBuilt: foundUser.yearBuilt,
              loanPurpose: foundUser.loanPurpose,
              ssn: foundUser.ssn
            });
    
        } else {
            res.status(401).json({message:"Invalid Username/Password"});
        }
         
        })
      });

      //delete user
app.delete('/mortgage/:id', (req, res) => {
  console.log("delete user ", req.params.id);
  userModel.findByIdAndRemove(req.params.id, { useFindAndModify: false }, (err, data)=>{
    if(err){
      res.status(400).json({ error: err.message });
    }
    if(data)
    {
      res.status(200).json({
        id:data.id,
      });
      } 
  });
});
  app.use((req, res, next) => {
        res.sendFile(path.resolve(__dirname, "public/build", "index.html"));
      });

  app.listen(PORT, () => {
    console.log('🎉🎊', 'listening on port', PORT, '🎉🎊',)
  });
