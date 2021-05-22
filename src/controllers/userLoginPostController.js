const {compaireHash} = require("../models/bcrypt");
const loginvalidation = require("../validations/loginvalidation");

module.exports = async (req,res) => {
    try {
    let {id, password} = await loginvalidation.validateAsync(req.body)
    let users = await req.psql.users.findOne({
        where:{
            id
        }
    })
    // user = {
    //     id:users.id,
    //     name:users.name
    // }
    if(!users) throw new Error("user is not defined")
    let isTrust = await compaireHash(password, users.dataValues.password)
    console.log(isTrust);
    res.status(200).json({
        ok:true,
        message:"succesfuly registrated",
    })
    } catch (e) {
        res.status(400).json({
            ok:false,
            data:e + ""
        })
    }
}