const router = require("express").Router()
const usersGetController = require("../controllers/usersGetController")

router.get("/", usersGetController)


module.exports = {
    path:"/users",
    router
}