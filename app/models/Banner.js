import mongoose from "mongoose";
const { Schema } = mongoose

const bannerSchema = new Schema({
    title: String,
    desc: String,
    slug: String,
    bg: String,
    cover: String

})

export default mongoose.models.Banner || mongoose.model('Banner', bannerSchema)
