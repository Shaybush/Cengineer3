import { NextFunction, Request, Response } from 'express';
import { generateRandomDigitsCode, readFile } from '../utils/functions.utils';
import { sendEmail } from '../utils/email.util';
import RedisCache from '../connections/redis-dal';
import path from 'path';
import CommonResponseDict from '../utils/common-response-dict.util';

export const sendCode = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const code = generateRandomDigitsCode(6);

		await RedisCache.setKeyWithValue({
			key: req.body.email,
			value: code,
			expirationTime: 60 * 5,
		});

		const pathTohtml = path.join(__dirname, '..', 'assets', 'verify-code.html');
		const html = (await readFile(pathTohtml)).replace('**XXXXXX**', code);

		await sendEmail({
			to: 'req.body.email',
			subject: 'Verify your account',
			text: `Your verification code is ${code}`,
			html,
		});

		res.status(CommonResponseDict.Success.code).json(CommonResponseDict.Success);
	} catch (error) {
		next(error);
	}
};
