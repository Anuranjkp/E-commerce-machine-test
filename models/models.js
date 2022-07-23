const mongoose = require("mongoose");
const userModel = mongoose.model('user', {
    user_id: { type: String, required: true },
    user_name: { type: String, required: true },
    user_email: { type: String, required: true }
})
const productModel = mongoose.model('product', {
    product_id: { type: String, required: true },
    product_name: { type: String, required: true },
    product_price: { type: Number, required: true },
    product_code: { type: Number, required: true }
})
const purchaseModel = mongoose.model('purchase', {
    purchase_id: { type: String, required: true },
    product_id: { type: String, required: true },
    purchase_amount: { type: Number, required: true }
})

module.exports = { userModel, productModel, purchaseModel }