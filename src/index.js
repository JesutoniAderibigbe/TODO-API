const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');



const app = express();
const port = 3000;


//mongodb+srv://<username>:<password>@cluster0.8azare7.mongodb.net/?retryWrites=true&w=majority
//Jaderibigbe147$
//Jesutoni

// Connect to MongoDB
mongoose.connect('mongodb+srv://Jesutoni:Jaderibigbe147$@cluster0.8azare7.mongodb.net/?retryWrites=true&w=majority/todo-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("MongoDB connected")
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

