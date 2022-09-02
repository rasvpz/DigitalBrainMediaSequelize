module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
    })

    return User

}