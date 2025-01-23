import React, { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';

// TODO - move interface to models folder
interface IFormInputCheckBoxModel {
	label: string;
	formRegisterName: string;
	register: UseFormRegister<any>;
	isChecked: boolean;
	setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormInputCheckBox: FC<IFormInputCheckBoxModel> = ({
	label,
	formRegisterName = '',
	register,
	isChecked,
	setIsChecked,
}) => {
	const uniqueID = `${crypto.randomUUID}_formInputCheckBox`;
	return (
		<div className='flex items-center mb-6'>
			<label className='text-gray-700 text-sm mb-2 order-1 px-2 cursor-pointer select-none' htmlFor={uniqueID}>
				{label}
			</label>
			<input
				{...register(formRegisterName)}
				id={uniqueID}
				onClick={() => setIsChecked((prev) => !prev)}
				className={`shadow-sm appearance-none rounded p-2 text-gray-700 mb-2 leading-tight`}
				checked={isChecked}
				type='checkbox'
			></input>
		</div>
	);
};

export default FormInputCheckBox;
