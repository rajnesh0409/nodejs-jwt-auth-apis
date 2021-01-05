const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const uuid = require("uuid");
const { secretKey } = require("../config/env");

/*
	* Create, verify and save new user 
	* @param {Object} req: express request object
	* @param {Object} res: express result object
*/

exports.registerUser = (req, res) => {
	// Validate request
	if (!req.body.email) {
		return res.status(400).send({
			message: "Email Id can not be empty",
		});
	} else if (!req.body.name) {
		return res.status(400).send({
			message: "Name can not be empty",
		});
	} else if (!req.body.password) {
		return res.status(400).send({
			message: "Password can not be empty",
		});
	}

	//check for duplicate email
	User.findOne({
		email: req.body.email,
	})
		.then((User) => {
			if (User) {
				return res.status(404).send({
					message:
						"Failed! EmailId is already in use - " + req.body.email,
				});
			}
		})
		.catch((err) => {
			return res.status(500).send({ message: err });
		});

	// Create a User
	const addUser = new User({
		email: req.body.email,
		name: req.body.name,
		description: req.body.description ? req.body.description : null,
		password: bcrypt.hashSync(req.body.password, 8),
		userId: uuid.v4(),
	});

	// Save User in the database
	addUser
		.save()
		.then((data) => {
			return res.send(data);
		})
		.catch((err) => {
			return res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the User.",
			});
		});
};

/*
	* SignIn user 
	* @param {Object} req: express request object
	* @param {Object} res: express result object
*/

exports.signIn = (req, res) => {
	User.findOne({
		email: req.body.email,
	})
		.then((User) => {
			if (!User) {
				return res.status(404).send({
					message: "Email Id not found ",
				});
			}

			const passwordIsValid = bcrypt.compareSync(
				req.body.password,
				User.password
			);

			if (!passwordIsValid) {
				return res.status(401).send({
					accessToken: null,
					message: "Invalid Password!",
				});
			}

			const token = jwt.sign({ id: User.userId }, secretKey, {
				expiresIn: 3600, // 1 hour
			});

			res.status(200).send({
				userId: User.userId,
				email: User.email,
				name: User.name,
				accessToken: token,
			});
		})
		.catch((err) => {
			return res.status(500).send({
				message: err.message || "Error retrieving email id"
			});
		});
};

/*
	* Middleware to verify the token and store the user data in req.userId
	* @param {Object} req: express request object
	* @param {Object} res: express result object
	* @param {Function} next: express next function 
*/

exports.verifyToken = (req, res, next) => {
	let token = req.headers["x-access-token"];
	if (!token) {
		return res.status(401).send({ message: "Unauthorized!" });
	}

	jwt.verify(token, secretKey, (err, decoded) => {
		if (err) {
			return res.status(401).send({ message: "Unauthorized!" });
		}
		req.userId = decoded.id;
		next();
	});
};
