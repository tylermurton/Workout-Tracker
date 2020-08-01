const express = require('express');
const routes = require("./controller/routes/routes");

let mongoose = require('mongoose');

// ssaEwWGkvfpitOxt
const MONGODB_URI = "mongodb+srv://tylermurton:ssaEwWGkvfpitOxt@cluster0.qdubq.mongodb.net/workouts?retryWrites=true&w=majority"

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workouts', 
 {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.listen(PORT, function() {
  console.log('App now listening at localhost:' + PORT);
});