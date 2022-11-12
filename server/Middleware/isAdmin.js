const isAdmin = async (req, res, next) => {
  console.log(req.user.role);
  try {
    if (req.user.role !== 1) {
      res.status(400).json({ msg: "Sorry, you aren't the boss :/" });
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({ msg: "network error" });
  }
};
module.exports = isAdmin;
