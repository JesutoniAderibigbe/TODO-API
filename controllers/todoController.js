const Todo = require('../models/Todo');

exports.createTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
    console.log(todo)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
    console.log(todos)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTodoById = async (req, res) => {
    try {
    const todo = await Todo.findById(req.params.id);
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
    });
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