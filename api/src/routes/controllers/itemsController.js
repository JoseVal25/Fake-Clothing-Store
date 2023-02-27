const { API_URL } = process.env;
const axios = require("axios");

const getAllItems = async (req, res) => {
  try {
    const apiInfo = await axios.get("https://fakestoreapi.com/products");
    const allItems = apiInfo.data.map((item) => item);

    return res.status(200).send(allItems);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllItems,
};
