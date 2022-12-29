const Message = require("../Models/Message");
const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json( messages );
  } catch (error) {
    res.json({ msg: "failed to get the messages" });
  }
};

const postMessage = async (req, res) => {
  try {
    const messageInfo = req.body;
    const newMessage = new Message({
      name: messageInfo.name,
      email: messageInfo.email,
      message: messageInfo.message,
    });
    await newMessage.save();
    res.status(201).json({ msg: "Message sent", newMessage});
  } catch (error) {
    res.status(400).json({ error: "Failed to sent message" });
  }
};

const deleteMessage = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedMessage = await Message.findByIdAndDelete(id);

    const messages = await Message.find();
    res.status(200).json({ msg: "the message is deleted", messages });
  } catch (error) {
    res.status(400).json({ msg: "failed to delete the message" });
  }
};

module.exports = { getAllMessages, postMessage, deleteMessage };