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
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User', // The user whom sent the message
			required: true,
		},
		text: {
			type: String,
			required: true, // The message content
		},
		room_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Room', // The room where the message was sent
			required: true,
		},
		read_by: {
			type: [mongoose.Schema.Types.ObjectId],
			ref: 'User', // The users who have read the message
		},
		attachments: [
			{
				url: String, // URL of an attachment (image, video, etc.)
				enum: ['image', 'video', 'file', 'audio'],
				type: String, // Type of attachment: image, video, file, etc.
			},
		],
		reactions: [
			{
				user: {
					type: mongoose.Schema.Types.ObjectId,
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
