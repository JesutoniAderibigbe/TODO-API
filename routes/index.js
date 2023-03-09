const router = require("express").Router()


//Routes will be here

router.get("/", (req, res)=>{
    res.send("Welcome to the HomePage")
})

module.exports = router;

