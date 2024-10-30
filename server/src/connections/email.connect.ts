import nodemailer , { Transporter } from "nodemailer"
import {config} from "dotenv"

config({path:`.env.${process.env.NODE_ENV}`})

console.log(nodemailer);
console.log(process.env.EMAIL_USER , process.env.EMAIL_PASS);



const transporter: Transporter = nodemailer.createTransport({
    host: 'smpt.imitate.email', 
    port: 587,
    secure: false, 
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    // tls: { rejectUnauthorized: false }
});

export default transporter