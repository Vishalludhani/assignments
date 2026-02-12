import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    productid: {
        type: Number,
        required: [true, "Enter the correct product id"]
    },
    productName: {
        type: String,
        required: [true, "Enter the correct name"],
    },
    price: {
        type: Number,
        required: [true, "Enter a valid amount"]
    }
}, {
    strict: 'throw',
    timestamps: true,
    versionKey: false
})

export const ProductModel = model('product', productSchema)