const mongoose = require("mongoose");

const bcrypt = require("bcrypt");


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
      },
      Todo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo',
        
      }],  
});





//hash the password before saving it to the database
UserSchema.pre("save", async function(next){
    const user = this;

    if (user.isModified('password') || user.isNew) {
        const hash = await bcrypt.hash(user.password, 10);
        user.password = hash;
      }
      next()
});


module.exports = new mongoose.model("User", UserSchema);