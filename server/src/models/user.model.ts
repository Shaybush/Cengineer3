import mongoose, { Schema, Types } from 'mongoose';

interface IUserModel {
	email: string;
	image?: string;
	status: 'online' | 'offline' | 'busy' | 'away';
	last_seen: Date;
	contact_ids: Types.ObjectId[];
	created_at: Date;
	updated_at: Date;
}

const userSchema = new mongoose.Schema<IUserModel>(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		image: String,
		status: {
			type: String,
			enum: ['online', 'offline', 'busy', 'away'],
			default: 'offline',
		},
		last_seen: {
			type: Date,
		},
		contact_ids: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		],
	},
	{ timestamps: true }
);

export const UserModel = mongoose.model<IUserModel>('User', userSchema);
