const User = require("../Models/User");

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: "failed to get users" });
  }
};

const getOneUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: "failed to get the user" });
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const newInput = req.body;
  try {
    const newUser = await User.findByIdAndUpdate(id, newInput, { new: true });
    const users = await User.find();

    res.status(200).json({ msg: "user has been updated", users });
  } catch (error) {
    res.status(400).json({ error: "failed to update the user" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedUser = await User.findByIdAndDelete(id);

    const users = await User.find();
    res.status(200).json({ msg: `${deletedUser.username} is deleted`, users });
  } catch (error) {
    res.status(400).json({ error: "failed to delete the user" });
  }
};

module.exports = { getAllUser, getOneUser, updateUser, deleteUser };
