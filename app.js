const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');


const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todo-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set up middleware
app.use(bodyParser.json());


// Set up routes
app.use('/todos', todoRoutes);
app.use('/getUsers', userRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Todo API running at http://localhost:${port}`);
});
