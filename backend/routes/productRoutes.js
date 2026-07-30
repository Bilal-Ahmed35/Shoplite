const express = require("express");

const router = express.Router();

const {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,

} = require("../controllers/productController");

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

router.get(
    "/",
    protect,
    getProducts);

router.post(
    "/",
    upload.single("image"),
    createProduct
);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct)
module.exports = router;