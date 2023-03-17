const express = require('express');
const todoController = require('../controllers/todoController');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authmiddleware');


const router = express.Router();

router.post('/', authMiddleware, todoController.createTodo);
router.get('/', authMiddleware, todoController.getTodos);
router.get('/:id', authMiddleware, todoController.getTodoById);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);




module.exports = router;
