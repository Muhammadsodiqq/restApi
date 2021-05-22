const {generateHash} = require("../models/bcrypt");
const signupValidation = require("../validations/signupValidation");

module.exports = async (req,res) => {
    try {
        let {name, password} = await signupValidation.validateAsync(req.body)
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