import { FC, useEffect } from 'react';
import { FieldErrors, FieldValues, RegisterOptions, UseFormRegister, UseFormSetValue } from 'react-hook-form';

// TODO - move interface to models folder
interface IFormInputDropdownPropsModel {
	label: string;
	formRegisterName: string;
	options: Record<string, string>[];
	defaultValue?: string;
	register: UseFormRegister<any>;
	errors: FieldErrors<FieldValues>;
	setValue: UseFormSetValue<any>;
	validation: RegisterOptions<any, string> | undefined;
}

const FormInputDropdown: FC<IFormInputDropdownPropsModel> = ({
	label,
	formRegisterName,
	options,
	defaultValue,
	register,
	errors,
	validation,
	setValue,
}) => {
	const errorMessage = errors[formRegisterName]?.message as string;

	useEffect(() => {
		if (defaultValue) {
			setValue(formRegisterName, defaultValue);
		}
	}, [defaultValue, setValue, formRegisterName]);

	return (
		<div className='mb-6'>
			<label className='block text-gray-700 text-sm font-bold mb-2'>{label}</label>
			<select
				{...register(formRegisterName, { ...validation })}
				className={`shadow-sm appearance-none rounded w-full py-2 ps-8 text-gray-700 mb-2 leading-tight focus:border-black focus:border-2 active:border-black focus:shadow-outline ${errors[formRegisterName] ? 'border-red-500' : ''}`}
			>
				{options.map((option, index) => (
					<option key={index} value={Object.keys(option)[0]}>
						{Object.values(option)[0]}
					</option>
				))}
			</select>
			{errors[formRegisterName] && <small className='text-red-500 text-xs italic px-1'>{errorMessage}</small>}
		</div>
	);
};

export default FormInputDropdown;
