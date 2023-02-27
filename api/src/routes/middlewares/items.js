const { Router } = require("express");
const { getAllItems } = require("../controllers/itemsController.js");

const itemsRouter = Router();

itemsRouter.get("/", getAllItems);

module.exports = itemsRouter;
