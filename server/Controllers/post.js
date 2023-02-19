import Roommsg from "../Modules/room.js";
export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Roommsg.find();

    res.status(200).json({ data: rooms });
  } catch (error) {
    res.status(404).json({ message: error.message });
    next(error);
  }
};
export const getroomByid = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log("id:", id);
    const rooms = await Roommsg.findById({ _id: id });
    res.status(200).json(rooms);
  } catch (error) {
    res.status(404).json({ message: error.message });
    next(error);
  }
};
