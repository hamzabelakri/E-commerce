const express = require("express");
const router = express.Router();
const isAuth=require('../Middleware/isAuth');
const isAdmin=require('../Middleware/isAdmin')

const {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getOneProduct,
} = require("../Controllers/productController");

router.get("/", getAllProducts);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/:id", getOneProduct);

module.exports = router;
