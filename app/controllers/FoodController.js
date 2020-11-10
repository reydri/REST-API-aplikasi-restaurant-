const {Foods} = require('../models');

module.exports = {
    index(req, res){
        Foods.findAll({})
        .then(foods => res.json({
            error: false,
            data: foods
        }))
        .catch(error => res.json ({
            error: true,
            data: [],
            error: error
        }));
    },

    create(req, res){
        const {food, price} = req.body;
        Foods.create({
            food, price
        })
        .then(food => res.status(201).json({
            error: false,
            data: food,
            message: "Data berhasil di insert"
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }))
    },

    update(req, res){
        const food_id = req.params.id;

        const { food, price } = req.body;

        Foods.update({
            food, price
        }, {
            where: {
                id: food_id
            }
        })
        .then(food => res.status(201).json({
            error: false,
            data: food,
            message: "Data berhasil di Update"
        }))
        .catch(food => res.json({
            error: true,
            error: error
        }))
    },

    destroy(req, res){
        const food_id = req.params.id;

        Foods.destroy({
            where : {
                id : food_id
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