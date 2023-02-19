import room from "../Modules/room.js";
export const createRoom = async (req, res) => {
  try {
    const {
      name,
      maxcount,
      description,
      phonenumber,
      rentperday,
      imagurls1,
      imagurls2,
      imagurls3,
      type,
    } = req.body;
    let imagurls = [imagurls1, imagurls2, imagurls3];
    const roomsave = await room({
      name,
      maxcount,
      phonenumber,
      rentperday,
      imagurls,
      roomtype: type,
      description,
    });
    roomsave.save();
    if (roomsave) {
      return res.status(200).json({
        status: "ok",
        message: "Add room successfully !",
        user: true,
      });
    } else {
      return res.status(201).json({
        status: "error",
        message: "Please try again !",
        user: false,
      });
    }
  } catch (error) {
    res.send(error);
  }
};
