const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3003;
const mongodb_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mortgageappnew';
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const userModel = require('./models/user.js');
const TOKEN_SECRET = process.env.SECRET || "SECRET_MORTGAGEAPP";

// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect(mongodb_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})

// middleware
app.use(express.json());

//GET Route
app.get("/", (req,res) => {
  res.send("Mortgage App");
});

const whitelist = ['http://localhost:3000/', 'http://localhost:3000'];
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
app.post('/mortgageapp', (req, res) => {
  console.log(req.body);
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    userModel.create(req.body, (error, createdMortgageApp) => {
      if (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
      }
      res.status(200).send(createdMortgageApp) 
      console.log(createdMortgageApp);
    })
  });

  app.listen(PORT, () => {
    console.log('🎉🎊', 'listening on port', PORT, '🎉🎊',)
  });