const express = require('express');
const UserController = require('./app/controllers/UserController');
const FoodController = require('./app/controllers/FoodController');
const DrinkController = require('./app/controllers/DrinkController');
const PackageController = require('./app/controllers/PackageController');
const OrderController = require('./app/controllers/OrderController');
const AuthController = require('./app/controllers/AuthController');

const router = new express.Router();
//Login Logout User jwt
router.post('/login', AuthController.login);

router.get('/logout', AuthController.logout);

//Manajemen User
router.get('/getUser', UserController.index);

router.get('/getUser/:id', UserController.list);

router.post('/createUser', UserController.create);

router.put('/updateUser/:id', UserController.update);

router.delete('/deleteUser/:id', UserController.destroy);
//Manajemen Makanan
router.get('/getFood', FoodController.index);

router.post('/createFood', FoodController.create);

router.put('/updateFood/:id', FoodController.update);

router.delete('/deleteFood/:id', FoodController.destroy);
//Manajemen Minuman
router.get('/getDrink', DrinkController.index);

router.post('/createDrink', DrinkController.create);

router.put('/updateDrink/:id', DrinkController.update);

router.delete('/deleteDrink/:id', DrinkController.destroy);
//Manajemen Paket
router.get('/getPackage', PackageController.index);

router.post('/createPackage', PackageController.create);

router.put('/updatePackage/:id', PackageController.update);

router.delete('/deletePackage/:id', PackageController.destroy);
//Menangani Order user sampai checkout
router.get('/getOrder', OrderController.index);

router.post('/createOrder', OrderController.create);

router.put('/updateOrder/:id', OrderController.update);

router.delete('/deleteOrder/:id', OrderController.destroy);

module.exports = router;