import nodemailer, { Transporter } from 'nodemailer';
import { EMAIL_PASS, EMAIL_USER } from '../utils/environment-variables';

const transporter: Transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: EMAIL_USER,
		pass: EMAIL_PASS,
	},
	tls: {
		rejectUnauthorized: false,
	},
});

export default transporter;
