import transporter from '../connections/email.connect';
import { AppError } from '../utils/app-error.util';
import { EMAIL_USER } from './environment-variables';

interface IEmailOptions {
	to: string;
	text: string;
	html: string;
	subject: string;
}

type IEmailSendResult = {
	accepted: string[];
	rejected: string[];
	ehlo: string[];
	envelopeTime: number;
	messageTime: number;
	messageSize: number;
	response: string;
	envelope: {
		from: string;
		to: string[];
	};
	messageId: string;
};

const sendEmail = async (options: IEmailOptions): Promise<IEmailSendResult> => {
	const { to, text, html, subject } = options;
	try {
		const result = await transporter.sendMail({
			from: EMAIL_USER,
			to,
			subject,
			text,
			html,
		});
		console.log(result);

		return result;
	} catch (error) {
		throw new AppError('Failed to send email', 500, error.message, true);
	}
};

export { sendEmail, IEmailOptions };
