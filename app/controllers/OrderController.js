const {Orders} = require('../models');

module.exports = {
    index(req, res){
        Orders.findAll({})
        .then(orders => res.json({
            error: false,
            data: orders
        }))
        .catch(error => res.json ({
            error: true,
            data: [],
            error: error
        }));
    },

    create(req, res){
        const {userid, packageid} = req.body;
        Orders.create({
            userid, packageid
        })
        .then(order => res.status(201).json({
            error: false,
            data: order,
            message: "Data berhasil di insert"
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }))
    },

    update(req, res){
        const order_id = req.params.id;

        const { userid, packageid } = req.body;

        Orders.update({
            userid, packageid
        }, {
            where: {
                id: order_id
            }
        })
        .then(order => res.status(201).json({
            error: false,
            data: order,
            message: "Data berhasil di Update"
        }))
        .catch(order => res.json({
            error: true,
            error: error
        }))
    },

    destroy(req, res){
        const order_id = req.params.id;

        Orders.destroy({
            where : {
                id : order_id
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