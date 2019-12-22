const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://rootzman:danceflow1@cluster0-bsgyj.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


const app = express();

// MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);



// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    { useUnifiedTopology: true },
     () => {console.log('connected to DB')
});

// Listening to Server
app.listen(3000);