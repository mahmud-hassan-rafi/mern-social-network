import User from "../models/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const handleSignupRoute = async (req, res) => {
  const { firstname, surname, email, password, birthday, gender } = req.body;
  if (await User.findOne({ email })) {
    res.status(403).json({ message: "This email has already an account" });
  }
  const hasedPassword = await bcrypt.hash(password, 10);
  // CREATE A NEW USER ON DATABASE
  const newUser = new User({
    firstname,
    surname,
    email,
    password: hasedPassword,
    birthday,
    gender,
  });
  await newUser.save(); // user saving to db

  //signing a new jwt token
  const jwtToken = jwt.sign(
    {
      email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  // sending token on the cookie
  res.cookie("token", jwtToken, {
    maxAge: 60 * 60 * 1000,
  });
  res.status(200).json({ message: "Account creation successfull" });
};

// handleLoginRoute
export const handleLoginRoute = async (req, res) => {
  const { email, password: reqPassword } = req.body;
  const responseFromDB = await User.findOne({ email });
  if (!responseFromDB) {
    return res.status(404).json({
      message: `No user found with this ${
        !parseInt(email) ? "Email" : "Number"
      }`,
    });
  }
  const { firstname, password: encryptedPassword } = responseFromDB;
  const matchingPassword = await bcrypt.compare(reqPassword, encryptedPassword);
  if (!matchingPassword) {
    return res.status(401).json({ message: "Password not matched" });
  }

  // //signing a new jwt token
  const jwtToken = jwt.sign(
    {
      email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  // sending token on the cookie
  res.cookie("token", jwtToken, {
    maxAge: 60 * 60 * 1000,
  });
  return res.status(200).json({ message: `Welcome ${firstname}` });
  // res.status(200).json({ message: "Account creation successfull" });
};
