import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema(
    {
        text: String,
        room_id: Schema.Types.ObjectId,
        user_email: String,
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Message", messageSchema);
