module.exports = (Sequelize,sequelize) => {
    return sequelize.define("users", {
      id:{
        type:Sequelize.DataTypes.UUID,
        primaryKey:true,
        defaultValue:Sequelize.DataTypes.UUIDV4()
      },
       userAgent: {
           type:Sequelize.DataTypes.STRING(128),
           allowNull:false
       },
       ipAddres:{
         type:Sequelize.DataTypes.INET
       }
     })
   }