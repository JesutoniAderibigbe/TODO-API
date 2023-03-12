const Todo = require('../models/Todo');
const userController = require('../controllers/userController');

exports.createTodo = async (req, res) => {
  try {

   const user = req.user
   console.log(user)

    const todo = new Todo(
      {
        title: req.body.title,
        description: req.body.description,
        
        user: user._id // add the user ID
      }
    );

   const savedTodo=  await todo.save();
   user.Todo.push(savedTodo)
   await user.save();
    res.status(201).json(todo);
    console.log(todo)
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error)
  }
};

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().populate('user');
    res.json(todos);
    console.log(todos)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTodoById = async (req, res) => {
    try {
    const todo = await Todo.findById(req.params.id).populate("user");
    if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todo);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
    };
    
    exports.updateTodo = async (req, res) => {
    try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    }).populate('user');
    if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todo);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
    };
    
    exports.deleteTodo = async (req, res) => {
    try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
    }
    res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
    };
    