import mongoose from "mongoose"
const { Schema } = mongoose

const gameSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },

    }
)