var express = require('express'),
  router = express.Router(),
  productCtrl = require('../controllers/ProductController'),
  userCtrl = require('../controllers/UserController');
  cartCtrl = require('../controllers/CartController');

//-------------------------------Product Routes-----------------------------------
router.get('/product/getProducts', productCtrl.getProducts);
router.get('/product/getProduct/:productId', productCtrl.getProduct);
router.get('/product/getProductsBelowPrice/:price', productCtrl.getProductsBelowPrice);
router.post('/product/createProduct', productCtrl.createProduct);
router.patch('/product/updateProduct/:productId', productCtrl.updateProduct);
router.delete('/product/deleteProduct/:productId', productCtrl.deleteProduct);

//---------------------------------User Routes------------------------------------
router.post('/user/signUp', userCtrl.signUp);
router.post('/user/logIn', userCtrl.logIn);
router.get('/user/logOut', userCtrl.logOut);
<<<<<<< Updated upstream
=======
router.get('/user/loggedIn', userCtrl.isLoggedIn);
router.get('/users', userCtrl.getAllUsers);
>>>>>>> Stashed changes

//---------------------------------Cart Routes------------------------------------
router.post('/cart/addToCart', cartCtrl.addToCart);
router.post('/cart/removeFromCart', cartCtrl.removeFromCart);
router.get('/cart/viewCart', cartCtrl.viewCart);

module.exports = router;
