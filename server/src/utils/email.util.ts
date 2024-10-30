import transporter from "../connections/email.connect";
import {config} from 'dotenv'
import {AppError} from "../utils/app-error.util";

config({path:`.env.${process.env.NODE_ENV}`})

interface IEmailOptions {
    to: string;
    text: string;
    html?: string;
}


const sendEmail = async (options: IEmailOptions): Promise<void> => {
    const { to, text, html } = options;
    try {
        const result = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject: "Cengineer3",
            text,
            html,
        });
        console.log(`Email sent: ${result.response}`);
    } catch (error) {
        console.log(error);
        
        // throw new AppError("Email sending failed", 500,error.message, true);
    }
};

export { sendEmail , IEmailOptions};
