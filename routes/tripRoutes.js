let express = require("express");
let tripRoutes = express.Router();
let Trip = require("../models/trip");

tripRoutes.route("/")
    .get((req, res) => {
    console.log(req);
        Trip.find(
            {user_id: req.user._id},
            (err, trips) => {
                if (err) return res.status(500).send(err);
                return res.send(trips)
            })
    })
    .post((req, res) => {
        console.log(req);
        let newTrip = new Trip(req.body);
        newTrip.user_id = req.user._id;
        newTrip.save((err, createdTrip) => {
            if (err) return res.status(500).send(err);
            return res.status(201).send(createdTrip);
        })
    });

tripRoutes.route("/:id")
    .get((req, res) => {
        Trip.findOne({
            user_id: req.user._id,
            _id: req.params.id
        }, (err, trip) => {
            if (err) return res.status(500).send(err);
            res.send(trip);
        })
    })
    .put((req, res) => {
        Trip.findOneAndUpdate({
            user_id: req.user._id,
            _id: req.params.id
        }, req.body, {
            new: true
        }, (err, updatedTrip) => {
            if (err) return res.status(500).send(err);
            res.send(updatedTrip)
        })
    })
    .delete((req, res) => {
        Trip.findOneAndRemove({
            user_id: req.user._id,
            _id: req.params.id
        }, (err, trip) => {
            if (err) return res.status(500).send(err);
            res.send(trip)
        })
    });

module.exports = tripRoutes;