import { FC } from 'react';
import { FieldErrors, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

// TODO - move interface to models folder
interface IFormInputTextAreaPropsModel {
	label: string;
	formRegisterName: string;
	defaultValue?: string;
	register: UseFormRegister<any>;
	errors: FieldErrors<FieldValues>;
	validation: RegisterOptions<any, string> | undefined;
	rows?: number;
	cols?: number;
}

const FormInputTextArea: FC<IFormInputTextAreaPropsModel> = ({
	label,
	formRegisterName,
	defaultValue = '',
	register,
	errors,
	validation,
	rows = 4,
	cols = 40,
}) => {
	const errorMessage = errors[formRegisterName]?.message as string;
	return (
		<div className='mb-6'>
			<label className='block text-gray-700 text-sm font-bold mb-2'>{label}</label>
			<textarea
				{...register(formRegisterName, validation)}
				rows={rows}
				cols={cols}
				className={`shadow-sm appearance-none rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight scrollbar focus:border-black focus:border-2 active:border-black focus:shadow-outline ${errors[formRegisterName] ? 'border-red-500' : ''}`}
				defaultValue={defaultValue}
			/>
			{errors[formRegisterName] && <small className='text-red-500 text-xs italic px-1'>{errorMessage}</small>}
		</div>
	);
};

export default FormInputTextArea;
