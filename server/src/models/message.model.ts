import mongoose, { Schema, Types } from 'mongoose';

interface IMessageModel {
	user_id: Types.ObjectId;
	text: string;
	room_id: Types.ObjectId;
	read_by: Types.ObjectId[];
	attachments?: {
		url: string;
		type: 'image' | 'video' | 'file' | 'audio';
	};
	reactions?: {
		user: Types.ObjectId;
		reactionType: 'like' | 'love' | 'laugh' | 'sad' | 'angry';
	}[];
	created_at: Date;
	updated_at: Date;
}

const messageSchema = new Schema<IMessageModel>(
	{
		user_id: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		text: {
			type: String,
			required: true,
			trim: true,
		},
		room_id: {
			type: Schema.Types.ObjectId,
			ref: 'Room',
			required: true,
		},
		read_by: {
			type: [Schema.Types.ObjectId],
			ref: 'User',
		},
		attachments: [
			{
				url: String,
				enum: ['image', 'video', 'file', 'audio'],
				type: String,
			},
		],
		reactions: [
			{
				user: {
					type: Schema.Types.ObjectId,
					ref: 'User',
				},
				reactionType: {
					type: String,
					enum: ['like', 'love', 'laugh', 'sad', 'angry'],
					default: 'like',
				},
			},
		],
	},
	{
		timestamps: true,
	}
);

export const MessageModel = mongoose.model<IMessageModel>('Message', messageSchema);
