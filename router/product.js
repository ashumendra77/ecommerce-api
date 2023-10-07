const router = require("express").Router();

const {fetchProduct,createproduct,updateProduct,deleteProduct} = require("../controller/productController");


router.route('/').get(fetchProduct);
router.route('/').post(createproduct);
router.route('/:id').put(updateProduct);
router.route('/:id').delete(deleteProduct);

module.exports = router;