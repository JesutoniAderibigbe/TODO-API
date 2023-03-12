const express = require("express")

const bcrypt = require('bcrypt');

const User = require('../models/User');

const passport = require("passport");

const jwt = require('jsonwebtoken');


const JWT_SECRET = 'facebook';

const { v4: uuidv4 } = require('uuid');
const nodemailer = require('nodemailer');
const crypto = require('crypto');





exports.UserSignUp = async(req, res)=> {
    try {
        // Check if email is already in use
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
          return res.status(400).json({ error: 'Email already in use' });
        }
        // Create new user
        const user = new User({
          email: req.body.email,
          password: req.body.password,
        });

        const savedUser = await user.save();
    
        res.status(201).json({ message: 'User created successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Server error' });
      }
}

exports.getUsers = async(req, res)=>{
    try {
        const users = await User.find().populate("Todo")
      res.json(users)
      console.log(users)

        
    } catch (error) {
        res.status(500).json({message: "Couldn't fetch Users"})
        
    }
      
}


exports.UserLogin = async(req, res)=> {
    try {
      const { email, password } = req.body;
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }
      // Check if password is correct
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ error: 'Invalid password' });
      }else{
        const token = jwt.sign({ userId: user._id }, JWT_SECRET);
        console.log(token)
    return   res.json({ user, token });

      }
      // Generate JWT token 
      

    } catch (error) {
      res.status(500).json({ error: 'Server error' });
      console.log(error)
    }
  }


  exports.findByEmail = async(req, res)=>{
    try {
        const user = await User.findOne({ email: req.params.email }).populate("Todo");
        console.log(user)
        if(!user){
       return res.status(404).json({message: "There is no user with such email"})
        }
        res.json(user);
        
    } catch (error) {
        res.status(500).json({message: `There is ${error}`});

        
    }

   

  }



  