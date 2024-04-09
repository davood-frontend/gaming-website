import mongoose from "mongoose";
const { Schema } = mongoose

const consoleSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        company: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        subImages: {
            type: Array,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)
export default mongoose.models.Console || mongoose.model('Console', consoleSchema)