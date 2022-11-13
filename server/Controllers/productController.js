const Product = require("../Models/Product.js");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json({ msg: "failed to get all products" });
  }
};

const getOneProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.json({ product });
  } catch (error) {
    res.json({ msg: "failed to get product" });
  }
};
const addProduct = async (req, res) => {
  try {
    const productInfo = req.body;
    const newProduct = new Product({
        name: productInfo.name,
        description: productInfo.description,
        price: productInfo.price,
        countInStock: productInfo.countInStock,
        imageUrl: productInfo.imageUrl,
    });
    await newProduct.save();
    res.status(201).json({ msg: "added successfully", newProduct });
  } catch (error) {
    res.status(400).json({ msg: "failed to add new product" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = req.body;
    await Product.findByIdAndUpdate(id, product, { new: true });
    res.status(201).json({ msg: "updated successfully", product });
  } catch (error) {
    res.status(400).json({ msg: "failed to udpate the product" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteproduct = await Product.findByIdAndRemove(id);
    const products = await Product.find();
    res
      .status(201)
      .json({ msg: "deleted successfully",  products });
  } catch (error) {
    res.status(400).json({ msg: "failed to delete the product" });
  }
};



module.exports = {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getOneProduct
 
};
