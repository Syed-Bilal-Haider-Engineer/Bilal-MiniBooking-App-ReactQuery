import booking from "../Modules/booking.js";
import { v4 as uuidv4 } from "uuid";
import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51Juq9WBQek6DJaoPIyShEQeO3QsSazFvTjeTxO9Cg4axSttLJivuPkSQhuz8zWSJ7xVfsReYJmFl7szS134dKOwz00JTZ1Hcrt"
);
///////////////Create order and save database//////////////////
export const bookinghandle = async (req, res, next) => {
  try {
    const { totalamount, token } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        customer: customer.id,
        amount: totalamount * 100,
        currency: "PKR",
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      try {
        const roomvalue = await new booking(req.body);
        roomvalue.save();
        if (roomvalue) {
          res
            .status(200)
            .json({ message: "send successfully !", payment: "ok" });
        } else {
          res
            .status(201)
            .json({ message: "Payment is not send!", payment: "error" });
        }
      } catch (error) {
        res.status(404).json({ message: error.message });
        next(error);
      }
    }
  } catch (error) {
    console.log("customer error", error);
    res.status(404).json({ message: "Server issue", status: "error" });
    next(error);
  }
};

//////////Fetch all order of login users///////////////
export const fetchBooksHandle = async (req, res) => {
  try {
    const id = req.params.id;
    const booked = await booking.find({ userid: id });
    if (booked) {
      console.log("booked value:", booked);
      res
        .status(200)
        .json({ message: "send successfully !", status: "ok", data: booked });
    } else {
      res.status(200).json({ message: "query issues !", status: "error" });
    }
  } catch (error) {
    res.send(error);
  }
};
///////////if user want to cancaled order of any booking //////////////////
export const bookOrderCancel = async (req, res, next) => {
  try {
    const _id = req.body.id;
    const data = await booking.findByIdAndUpdate(_id, {
      status: "Inactive",
    });
    if (data) {
      res
        .status(200)
        .json({ message: "send successfully !", status: "ok", data: data });
    } else {
      res.status(201).json({ message: "Please try again !", status: "error" });
    }
  } catch (error) {
    next(error);
    console.log("Order canceled error");
  }
};

export const bookingAllRecord = async (req, res, next) => {
  try {
    const data = await booking.find();
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(201).json({ message: "Server issues !", status: "error" });
    }
  } catch (error) {
    next(error);
    console.log("Order canceled error");
  }
};
