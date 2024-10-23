import mongoose, { Schema, Types } from 'mongoose';

interface IUserModel {
	email: string;
	rooms_ids: Types.ObjectId[];
	created_at: Date;
	updated_at: Date;
}

const userSchema = new Schema<IUserModel>(
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

export const UserModel = mongoose.model<IUserModel>('User', userSchema);
