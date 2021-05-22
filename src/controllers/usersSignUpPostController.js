const jwt = require("../models/jwt");
const {generateHash} = require("../models/bcrypt");

module.exports = async (req,res) => {
    try {
        let {name, password} = await jwt.validateAsync(req.body)
    let users = await req.psql.users.create({name, password:await generateHash(await password)})
    user = {
        id:users.id,
        name:users.name
    }
    console.log(user);
    res.status(200).json({
        ok:true,
        message:"succesfuly registrated",
        data:user
    })
    } catch (e) {
        res.status(400).json({
            ok:false,
            data:e + ""
        })
    }
}