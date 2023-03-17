const router = require("express").Router();
const Todo = require("../models/Todo");


//routes
//ADD TODO
router.post("/add/todo", (req, res)=> {
    const todo = req.body;
    const newTodo  = new Todo({todo})

    //save the todo
    

    console.log(todo);
})


module.exports = router;