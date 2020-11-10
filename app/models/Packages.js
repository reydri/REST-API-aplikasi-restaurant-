'use strict'

module.exports = (sequelize, DataTypes) => {
    const Packages = sequelize.define('Packages',{
        package    : DataTypes.STRING,
        price      : DataTypes.STRING
    }, {});

    Packages.associate = function(models){

    };
    return Packages;
};