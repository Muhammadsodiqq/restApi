const {Sequelize,DataTypes} = require("sequelize");
const userModel = require("../models/userModel");


const sequelize = new Sequelize("postgres://postgres:973335917@localhost:5432/usersystem",{
    logging:e=>console.log(e)
})


module.exports =  postgres



async function postgres ()  {
    try {
        let db = {}
        db.users = await userModel(Sequelize,sequelize)
        // await sequelize.sync({force:true})
        return  db
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}