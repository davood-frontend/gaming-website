import mongoose from "mongoose";
const { Schema } = mongoose

const heroItemsSchema = new Schema({
    title: String,
    desc: String,
    price: Number,
    slug: String,
})

const heroSchema = new Schema({
    items: [heroItemsSchema]
})



export default mongoose.models.Hero || mongoose.model('Hero', heroSchema)
