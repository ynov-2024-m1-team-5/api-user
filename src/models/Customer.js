module.exports = (sequelize, DataTypes) => {

    // Définition du modèle User
    const Customer = sequelize.define('userlogin', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        address: DataTypes.STRING,
        zipcode: DataTypes.INTEGER,
        city: DataTypes.STRING,
        phone: DataTypes.STRING

    }, {
        timestamps: false
    });

    return Customer;

};