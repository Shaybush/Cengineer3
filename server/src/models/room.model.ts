import mongoose, { Schema, Types } from 'mongoose';

interface IRoomModel {
	name: string;
	users: Types.ObjectId[];
	created_at: Date;
	updated_at: Date;
}

const roomSchema = new Schema<IRoomModel>(
	{
		name: {
			type: String,
			unique: true,
			required: true,
		},
		users: [Schema.Types.ObjectId],
	},
	{
		timestamps: true,
	}
);

export default mongoose.model<IRoomModel>('Room', roomSchema);
