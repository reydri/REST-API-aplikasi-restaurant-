'use strict'

module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('Orders',{
        userid     : DataTypes.INTEGER,
        packageid      : DataTypes.INTEGER
    }, {});

    Orders.associate = function(models){

    };
    return Orders;
};