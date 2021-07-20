const { userLogin, createUser, refreshToken } = require("../controller/user");

const router = require("express").Router();

//REGISTER
router.post("/register", createUser);

//LOGIN
router.post("/login", userLogin);

//REFRESH TOKEN
router.post("/refresh", refreshToken);

module.exports = router;
