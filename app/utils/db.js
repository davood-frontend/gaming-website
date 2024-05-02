import mongoose from "mongoose";
const connect = async () => {
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGO)
    } catch (err) {
        console.log("Database connection error");
    }
}
export default connect;