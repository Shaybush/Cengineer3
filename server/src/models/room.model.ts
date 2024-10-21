import mongoose, { Schema } from "mongoose";

const roomSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Room", roomSchema);
