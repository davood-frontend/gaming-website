import mongoose from 'mongoose'
const { Schema } = mongoose
const blogSchema = new Schema(
    {
        title: {
            type: String,
            require: true
        },
        img: {
            type: String,
            require: true
        },
    },
    { timestamps: true }
)
export default mongoose.models.Blog || mongoose.model('Blog', blogSchema)