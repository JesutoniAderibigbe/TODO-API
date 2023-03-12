const mongoose = require("mongoose")


const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        
      },    
    
})

module.exports = new mongoose.model("Todo", TodoSchema);