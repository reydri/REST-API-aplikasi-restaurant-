const {User} = require('../models');
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");

module.exports = {

    login(req, res) {
		User.findOne({
            where: {
                username: req.body.username
            }
        })
        .then(user => {
            if (!user) {
              return res.status(404).send('User Not Found.');
            }else {
              // res.status(200).send({ auth: true, accessToken: token });
                if (user.password === req.body.password) { // apabila data password sama dengan user password
                    var token = jwt.sign(user.toJSON(), 'jwtsecret', { // melakukan generate token di jwt
                        algorithm: 'HS256'
                    });
                    res.json({ message: 'berhasil login ke aplikasi restaurant', token: token });
                } else { // apabila salah password
                    res.json({ message: 'password salah' });
                }
            }
        }).catch(err => {
            res.status(500).send('Error -> ' + err);
        });
    },

    logout(req, res) {
        var logout = function() {
            return function (req, res, next) {
                req.logout();
                delete req.session;
                next();
            };
        };
        return res.json({
            message: "Berhasil logout dari aplikasi restaurant"
        })
    }
}