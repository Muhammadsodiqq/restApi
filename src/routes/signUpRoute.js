const router = require("express").Router()
const usersSignUpPostController = require("../controllers/usersSignUpPostController")

router.post("/", usersSignUpPostController)


module.exports = {
    path:"/signup",
    router
}