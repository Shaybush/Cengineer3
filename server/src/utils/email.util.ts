import transporter from "../connections/email.connect";
import {AppError} from "../utils/app-error.util";
import { EMAIL_USER } from "./environment-variables";

interface IEmailOptions {
    to: string;
    text: string;
    html: string;
    subject: string;
}

const sendEmail = async (options: IEmailOptions): Promise<void> => {
    const { to, text, html, subject } = options;
    try {
        const result = await transporter.sendMail({
            from: EMAIL_USER,
            to,
            subject,
            text,
            html,
        });
        console.log(`Email sent: ${result.response}`);
    } catch (error) {
        throw new AppError("Email sending failed", 500,error.message, true);
    }
};

export { sendEmail , IEmailOptions};