const {User} = require('../models');

module.exports = {

    index(req, res){
        User.findAll({})
        .then(users => res.json({
            error: false,
            data: users
        }))
        .catch(error => res.json ({
            error: true,
            data: [],
            error: error
        }));
    },

    list(req, res){
        const user_id = req.params.id;
        User.findOne({
            where : {
                id : user_id
            }
        })
        .then (user => res.status(201).json({
            error: false,
            data : user
        }))
        .catch (error => res.json({
            error: true,
            error: error,
        }));
    },

    create(req, res){
        const {first_name, last_name, email, username, password} = req.body;
        User.create({
            first_name, last_name, email, username, password
        })
        .then(user => res.status(201).json({
            error: false,
            data: user,
            message: "Data berhasil di insert"
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }))
    },

    update(req, res){
        const user_id = req.params.id;

        const { first_name, last_name, email, username, password } = req.body;

        User.update({
            first_name, last_name, email, username, password
        }, {
            where: {
                id: user_id
            }
        })
        .then(user => res.status(201).json({
            error: false,
            data: user,
            message: "Data berhasil di Update"
        }))
        .catch(user => res.json({
            error: true,
            error: error
        }))
    },

    destroy(req, res){
        const user_id = req.params.id;

        User.destroy({
            where : {
                id : user_id
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