const {Packages} = require('../models');

module.exports = {
    index(req, res){
        Packages.findAll({})
        .then(packages => res.json({
            error: false,
            data: packages
        }))
        .catch(error => res.json ({
            error: true,
            data: [],
            error: error
        }));
    },

    create(req, res){
        const {package, price} = req.body;
        Packages.create({
            package, price
        })
        .then(package => res.status(201).json({
            error: false,
            data: package,
            message: "Data berhasil di insert"
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }))
    },

    update(req, res){
        const package_id = req.params.id;

        const { package, price } = req.body;

        Packages.update({
            package, price
        }, {
            where: {
                id: package_id
            }
        })
        .then(package => res.status(201).json({
            error: false,
            data: package,
            message: "Data berhasil di Update"
        }))
        .catch(package => res.json({
            error: true,
            error: error
        }))
    },

    destroy(req, res){
        const package_id = req.params.id;

        Packages.destroy({
            where : {
                id : package_id
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