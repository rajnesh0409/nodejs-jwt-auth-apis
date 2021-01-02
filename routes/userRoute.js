const user = require("../controllers/userController");
const auth = require("../controllers/authController");

module.exports = function (router) {
	router.post("/registerUser", auth.registerUser);
	router.post("/signIn", auth.signIn);
	router.get("/getUsersList", auth.verifyToken, user.getAllUsers);
	router.get("/getUser/:userId", auth.verifyToken, user.getUser);
	router.put("/updateUser/:userId", auth.verifyToken, user.updateUser);
	router.delete("/removeUser/:userId", auth.verifyToken, user.deleteUser);
};
