const mongoose = require("mongoose");
const Product = require('../../models/product.model');

// [GET] /products
module.exports.index = async (req, res) =>{
  const products = await Product.find({
    status: "active",
    deleted: false
  }).sort({position: "desc"});

  const newProducts = products.map(item=>{
    item.priceNew = (item.price*(100 - item.discountPercentage)/100).toFixed(0);
    return item;
  })

  // console.log(newProducts);
  res.render("clients/pages/products/index.pug", {
    pageTitle: "Trang danh sách sản phẩm",
    products: newProducts
  });
}

// [GET] /products/detail
module.exports.detail = async (req, res) =>{
  try {
    // console.log(req.params);
    const value = req.params.value;
    let find = {
      deleted: false,
      status: "active"
    }
    if(mongoose.Types.ObjectId.isValid(value)){
      find._id = value;
    }
    else{
      find.slug = value;
    }
    // console.log(find);
    const product = await Product.findOne(find);
    // console.log(product);
    res.render("clients/pages/products/detail.pug", {
      pageTitle: product.title,
      product: product
    });
  } catch (error) {
    req.flash("error", "Không tìm thấy sản phẩm!");
    res.redirect(req.get("Referrer") || "/");
  }
}