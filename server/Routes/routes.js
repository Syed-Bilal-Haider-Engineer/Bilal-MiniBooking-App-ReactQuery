import express from "express";
import * as rooms from "../Controllers/post.js";
import * as user from "../Controllers/userRoute.js";
import * as books from "../Controllers/booking.js";
import * as createNewRooms from "../Controllers/CreateRoom.js";
const routes = express.Router();
// get methods here
routes.get("/getroombyId/:id", rooms.getroomByid);
routes.get("/getpost", rooms.getRooms);
routes.get("/getuser/:id", user.getUserinfo);
routes.get("/verifytoken", user?.tokenVerifyHandler);
routes.get("/booksdetails/:id", books.fetchBooksHandle);
routes.get("/bookingAllRecord", books.bookingAllRecord);
// post methods start here
routes.post("/createuser", user.createUser);
routes.post("/login", user.login);
routes.post("/createbooking", books.bookinghandle);
routes.post("/orderCancelBook", books.bookOrderCancel);
routes.post("/createRooms", createNewRooms.createRoom);
routes.post("/forgetpassword", user.emailSendHandle);
routes.post("/addnewPassword", user.addNewpassword);
routes.post("/userprofileupdate", user.userprofileupdate);
export default routes;
