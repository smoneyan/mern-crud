const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const items = require('./routes/api/items');
const app = express();

//Adding bodyParser middleware 
app.use(bodyParser.json());


//DB config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB 
mongoose.connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.log(err);
    console.log('Error in connecting to MongoDB')
  }
  );

app.use('/api/items', items);

const port = 3000 || process.env.port;

app.listen(port, () => {
  console.log(`App listening on ${port}`)
});