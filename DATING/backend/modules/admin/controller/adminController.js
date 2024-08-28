const Products = require("../models/products.model");
const { CustomError } = require("../../../middlewares/CustomError");
const AsyncHandle = require("../../../middlewares/AsyncHandler");
const AdminSignup = (req, res) => {
  return res.json({ message: "success" });
};
const addProduct = AsyncHandle(async (req, res) => {
  const product = new Products({
    Name,
    Price,
    Category,
  });
  await product.save();
  return res.json({ message: "New product added!" });
});
module.exports = {
  AdminSignup,
};
