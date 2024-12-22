const User = require("./model/User");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./constants");

async function loginUser(email, password) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }
  const isPasswordCorrect = password === user.password;
  if (!isPasswordCorrect) {
    throw new Error("Wrong password");
  }

  return jwt.sign({ email }, JWT_SECRET, { expiresIn: "30d" });
}

module.exports = {
  loginUser,
};
