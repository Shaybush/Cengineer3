import mongoose, { Schema, Types } from 'mongoose';

interface IRoomModel {
	name: string;
	image: string;
	is_group: boolean;
	last_message: Types.ObjectId;
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
			trim: true,
		},
		users: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		image: String,
		is_group: {
			type: Boolean,
			default: false,
		},
		last_message: {
			type: Schema.Types.ObjectId,
			ref: 'Message',
		},
	},
	{
		timestamps: true,
	}
);

export const RoomModel = mongoose.model<IRoomModel>('Room', roomSchema);
