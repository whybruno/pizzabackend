import { db } from "../database/DBclient.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

//authenticate user
//route POST /api/users/login
const Login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //check for email
    if (!email) {
      res.status(403);
      throw new Error("Please enter your email");
    }
    //check for password
    if (!password) {
      res.status(403);
      throw new Error("Please enter your password");
    }
    //check db for email
    const { data, error } = await db
      .from("User")
      .select("*")
      .eq("email", email);

    const pass = await bcrypt.compare(password, data[0].password);

    //check username exists and password is correct
    if (data.length != 1 || !pass) {
      res.status(403);
      throw new Error("Invalid username or password");
    } else {
      generateToken(res, data[0].id);
    }
    res.status(200).json({ message: "User logged in!", data: data });
  } catch (error) {
    next(error);
  }
};

// POST ---> Register User /api/users
const Register = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(403);
      throw new Error("Please enter an email and password");
    }
    //check if user already exists
    let { data, error } = await db.from("User").select("*");
    for (let user of data) {
      console.log(user.email);
      if (user.email === email) {
        res.status(400);
        throw new Error("User already exists!");
      }
    }

    //if it does not exists add user to database
    await db
      .from("User")
      .insert([
        {
          email: email,
          password: await bcrypt.hash(password, 10),
        },
      ])
      .select();

    res.status(200).json({ message: "User registered!" });
  } catch (error) {
    next(error);
  }
};

// POST ---> Logout /api/users/logout
const Logout = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User logged out!" });
};

// GET ----> Show account info /api/users/profile
const Profile = (req, res) => {
  res.status(200).json({ message: "Checked user profile!" });
};

export { Login, Register, Logout, Profile };
