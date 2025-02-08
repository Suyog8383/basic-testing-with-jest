const axios = require("axios");
const axiosCall = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { axiosCall };
