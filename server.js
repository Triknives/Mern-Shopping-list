const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

const items = require('./routes/api/items');
const reviews = require('./routes/api/reviews');


const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDb Connected...'))
  .catch(err => console.log(err));
  { useUnifiedTopology: true }

  //Use routes
  app.use('/api/items', items);
  app.use('/api/reviews', reviews);

  const port = process.envPORT || 5000;

  app.listen(port, () => console.log(`Server started on port ${port}`));
