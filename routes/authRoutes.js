let express = require("express");
let authRoutes = express.Router();
let User = require("../models/user");
let jwt = require("jsonwebtoken");
let config = require("../config");

authRoutes.post("/signup", (req, res) => {
    User.findOne({email: req.body.email.toLowerCase()}, (err, existingUser) => {
        if (err) return res.status(500).send(err);
        console.log(existingUser);
        if (existingUser) {
            return res.status(403).send({success: false, message: "That email is already taken"});
        }
        let newUser = new User(req.body);
        newUser.save((err, userObj) => {
            if (err) return res.status(500).send(err);
            return res.send(userObj);
        });
    });
});

authRoutes.post("/login", (req, res) => {
    User.findOne({email: req.body.email.toLowerCase()}, (err, existingUser) => {
        if (err) return res.status(500).send(err);
        if (!existingUser || existingUser.password !== req.body.password) {
            return res.status(401).send({success: false, message: "Email or password is incorrect"});
        }
        let token = jwt.sign(existingUser.toObject(), config.secret);
        return res.send({token: token, user: existingUser.toObject(), success: true, message: "Enjoy your token!"})
    });
});

module.exports = authRoutes;