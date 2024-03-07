//GET ----> Show Inventory info - /api/users/
import { db } from "../database/DBclient.js";

const showPizza = async (req, res, next) => {
  try {
    //get data from inventory
    let { data, error } = await db.from("Inventory").select();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export { showPizza };
