import mongoose, { Schema, Types } from 'mongoose';

interface IMessageModel {
	text: string;
	room_id: Types.ObjectId;
	user_email: string;
	created_at: Date;
	updated_at: Date;
}

const messageSchema = new Schema<IMessageModel>(
	{
		text: String,
		room_id: Schema.Types.ObjectId,
		user_email: String,
	},
	{
		timestamps: true,
	}
);

export default mongoose.model<IMessageModel>('Message', messageSchema);
