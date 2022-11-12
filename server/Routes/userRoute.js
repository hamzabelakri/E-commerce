const express = require("express");
const router = express.Router();
const {
  getAllUser,
  getOneUser,
  updateUser,
  deleteUser,
} = require("../Controllers/userController");

router.get("/", getAllUser);
router.get("/:id", getOneUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
