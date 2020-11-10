'use strict'

module.exports = (sequelize, DataTypes) => {
    const Foods = sequelize.define('Foods',{
        food    : DataTypes.STRING,
        price   : DataTypes.STRING
    }, {});

    Foods.associate = function(models){

    };
    return Foods;
};