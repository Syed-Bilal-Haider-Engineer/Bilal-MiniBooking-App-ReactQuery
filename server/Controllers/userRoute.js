import jwt from "jsonwebtoken";
import usersModal from "../Modules/User.js";
import { config } from "../Config.js";
import nodemailer from "nodemailer";
export const createUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    let userExist = await usersModal.findOne({ email });
    if (!userExist) {
      const uservalue = await new usersModal(req.body);
      uservalue.save();
      if (uservalue) {
        console.log("request", req.body);
        res
          .status(200)
          .json({ message: "send successfully !", status: "ok", user: true });
      } else {
        res.status(200).json({
          message: "please try agian !",
          status: "error",
          user: false,
        });
      }
    } else {
      console.log("already exist", userExist);
      res.status(201).json({
        message: "user already exist !",
        status: "error",
        user: false,
      });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
    next();
  }
};

////////////////////////////////////// Login handler=////////////////////////////////
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await usersModal.findOne({ email: email, password: password });
    if (user) {
      let userToken = { id: user._id };
      let sign = await jwt.sign(userToken, config, {
        expiresIn: "6d",
      });
      if (sign) {
        console.log("user login ");
        res.json({
          status: "ok",
          message: "User login Successfully!",
          token: sign,
          user: true,
        });
      }
    } else {
      res.status(201).json({
        status: "error",
        message: "SignUp First..!",
        user: false,
      });
    }
  } catch (e) {
    res.status(404).json({
      status: "error",
      message: "server issue",
    });
    next();
  }
};

export const tokenVerifyHandler = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  try {
    var decoded = jwt.verify(token, config);
    if (decoded.id) {
      const user = await usersModal.findOne({ _id: decoded.id });
      if (user) {
        res.status(200).json({
          status: "ok",
          name: user?.name,
          userid: user?._id,
        });
      }
    } else {
      res.status(201).json({
        status: "error",
        message: " invaild token",
        token: false,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Please try again!",
      user: false,
    });
    next();
  }
};

//////////////////////// Get details of login user //////////////////

export const getUserinfo = async (req, res, next) => {
  try {
    const id = req.params.id;

    const user = await usersModal.findOne({ _id: id }).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: "Please try again!",
      user: false,
    });
    next();
  }
};

///////////////////Forget password throgth email//////////////////

export const emailSendHandle = async (req, res) => {
  try {
    const { email } = req.body;
    const userdetails = await usersModal.findById({ email });
    if (email !== "") {
      const smtpTransport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        // ssl:     true,
        secure: false,
        //  requireTLS: true,
        auth: {
          user: "bilalshahbscs@gmail.com",
          pass: "smkxtvwfwkksyoze",
        },
        tls: { rejectUnauthorized: false },
      });
      const mailOptions = {
        from: `"Welcome To Booking App Auth" <bilalshahbscs@gmail.com>`,
        to: `${email}`,
        subject: "Account Confirmation Message",
        html: ` ${userdetails._id}`,
      };
      smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
          console.log(error);
          return false;
        } else {
          console.log(response);
          return true;
        }
      });
    }
  } catch (error) {
    console.log("password forget error");
  }
};

export const addNewpassword = async (req, res, next) => {
  try {
    console.log(req.body);
  } catch (error) {
    next(error);
  }
};

export const userprofileupdate = async (req, res) => {
  try {
    let { name, email, description, phonenumber, id } = req.body;
    const updateuser = await usersModal.updateOne(
      { _id: id },
      {
        name,
        email,
        description,
        phonenumber,
      }
    );
    if (updateuser) {
      res.status(200).json({
        status: "ok",
        message: "user profile update successfully",
        user: true,
      });
    } else {
      res.status(200).json({
        status: "error",
        message: "Please try again !",
        user: false,
      });
    }
  } catch (error) {
    next(error);
  }
};
