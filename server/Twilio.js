const accoundId = "";
const authToken = "";
const client = new twilio(accoundId, authToken);
const phoneno = +923466929743;
const sendOTP = () => {
  const phone_number = req.body.phone_num;
  const otp = Math.random(1000 + Math.random() * 5000);
  try {
    client.message
      .create({ body: `Your otp ${otp} `, from: phoneno, to: phone_number })
      .the((message) => {
        console.log(message?.sid);
        console.log("send message");
      })
      .catch((error) => {
        console.log("error", error);
      });
  } catch (error) {}
};
