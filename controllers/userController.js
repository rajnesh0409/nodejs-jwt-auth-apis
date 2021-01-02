const mongoose = require("mongoose");
const User = require("../models/userModel");

exports.getAllUsers = (req, res) => {
    User.find()
        .then((Users) => {
            res.send(Users);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while retrieving Users.",
            });
        });
};

exports.getUser = (req, res) => {
    User.findOne({
        userId: req.params.userId,
    })
        .then((User) => {
            if (!User) {
                return res.status(404).send({
                    message: "User not found",
                });
            }
            res.send(User);
        })
        .catch((err) => {
            return res.status(500).send({
                message: err.message || "Error retrieving user details",
            });
        });
};

exports.updateUser = (req, res) => {
    // Validate Request
    if (!req.params.userId) {
        return res.status(400).send({
            message: "userId required",
        });
    }

    // Find User and update it with the request body
    User.findOneAndUpdate(
        {
            userId: req.params.userId,
        },
        {
            name: req.body.name,
            description: req.body.description ? req.body.description : null,
        },
        { useFindAndModify: false }
    )
        .then((User) => {
            if (!User) {
                return res.status(404).send({
                    message: "User not found !",
                });
            }
            res.send({ success: true, message: "Record updated successfully" });
        })
        .catch((err) => {
            return res.status(500).send({
                message: err.message || "Error updating user details",
            });
        });
};

// Delete a User with the specified UserId in the request
exports.deleteUser = (req, res) => {
    User.findOneAndRemove({
        userId: req.params.userId,
    })
        .then((User) => {
            if (!User) {
                return res.status(404).send({
                    message: "User not found !",
                });
            }
            return res.send({
                success: true,
                message: "User deleted successfully",
            });
        })
        .catch((err) => {
            return res.status(500).send({
                message: err.message || "Could not delete user",
            });
        });
};
