const { Router } = require("express");
const itemsMiddleware = require("./middlewares/items.js");

const mainRouter = Router();

mainRouter.use("/items", itemsMiddleware);

module.exports = mainRouter;
