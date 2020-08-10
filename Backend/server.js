const express = require('express');
const app = express();
//const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3003;
const mongodb_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mortgageapp';

// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect(mongodb_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})

// middleware
app.use(express.json());


/* const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) >= 0) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}; */

//app.use(cors(corsOptions)); 

//GET Route
app.get("/", (req,res) => {
  res.send("Mortgage App");
})

app.listen(PORT, () => {
  console.log('🎉🎊', 'listening on port', PORT, '🎉🎊',)
})