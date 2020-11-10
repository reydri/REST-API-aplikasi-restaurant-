const {Drinks} = require('../models');

module.exports = {
    index(req, res){
        Drinks.findAll({})
        .then(drinks => res.json({
            error: false,
            data: drinks
        }))
        .catch(error => res.json ({
            error: true,
            data: [],
            error: error
        }));
    },

    create(req, res){
        const {drink, price} = req.body;
        Drinks.create({
            drink, price
        })
        .then(drink => res.status(201).json({
            error: false,
            data: drink,
            message: "Data berhasil di insert"
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }))
    },

    update(req, res){
        const drink_id = req.params.id;

        const { drink, price } = req.body;

        Drinks.update({
            drink, price
        }, {
            where: {
                id: drink_id
            }
        })
        .then(drink => res.status(201).json({
            error: false,
            data: drink,
            message: "Data berhasil di Update"
        }))
        .catch(drink => res.json({
            error: true,
            error: error
        }))
    },

    destroy(req, res){
        const drink_id = req.params.id;

        Drinks.destroy({
            where : {
                id : drink_id
            }
        })
        .then (status => res.status(201).json({
            error: false,
            message: "Data berhasil di Hapus"
        }))
        .catch (error => res.json({
            error: true,
            error: error
        }));
    }
}