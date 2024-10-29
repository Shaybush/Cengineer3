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
			unique: true, // Username for identifying the user
		},
		image: String,
		status: {
			type: String,
			enum: ['online', 'offline', 'busy', 'away'], // User status for presence indication
			default: 'offline',
		},
		last_seen: {
			type: Date, // Timestamp of the last time the user was online
		},
		contact_ids: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User', // List of the user's contacts/friends
			},
		],
	},
	{ timestamps: true }
);

export const UserModel = mongoose.model<IUserModel>('User', userSchema);
