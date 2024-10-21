import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
        },
        rooms_ids: [Schema.Types.ObjectId],
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("User", userSchema);
