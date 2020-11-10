'use strict'

module.exports = (sequelize, DataTypes) => {
    const Drinks = sequelize.define('Drinks',{
        drink    : DataTypes.STRING,
        price   : DataTypes.STRING
    }, {});

    Drinks.associate = function(models){

    };
    return Drinks;
};