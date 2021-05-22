const router = require("express").Router()
const userLoginPostController = require("../controllers/userLoginPostController")
const usersSignUpPostController = require("../controllers/usersSignUpPostController")

router.post("/sigup", usersSignUpPostController)
router.post('/login', userLoginPostController)

module.exports = {
    path:"/",
    router
}