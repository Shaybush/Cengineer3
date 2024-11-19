import transporter from '../connections/email.connect';
import { AppError } from '../utils/app-error.util';
import { EMAIL_USER } from './environment-variables';

interface IEmailOptions {
	to: string;
	text: string;
	html: string;
	subject: string;
}

const sendEmail = async (options: IEmailOptions): Promise<any> => {
	const { to, text, html, subject } = options;
	try {
		const result = await transporter.sendMail({
			from: EMAIL_USER,
			to,
			subject,
			text,
			html,
		});
		return result;
	} catch (error) {
		throw new AppError('Failed to send email', 500, error.message, true);
	}
};

export { sendEmail, IEmailOptions };
