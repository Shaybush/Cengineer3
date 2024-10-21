import mongoose from "mongoose";

export const mongoConnect = async () => {
    try {
        await mongoose.connect("mongodb://mongo:27017/cengineers3-test");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

mongoConnect()
