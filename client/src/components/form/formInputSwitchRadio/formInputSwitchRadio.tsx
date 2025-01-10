import { FC, useEffect, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

// TODO - move interface to models folder
interface IFormInputSwitchRadioPropsModel {
	label: string;
	formRegisterName: string;
	defaultValue?: boolean | string;
	register: UseFormRegister<any>;
	acceptBtnContext?: string;
	rejectBtnContext?: string;
}

const FormInputSwitchRadio: FC<IFormInputSwitchRadioPropsModel> = ({
	label,
	formRegisterName,
	defaultValue,
	register,
	acceptBtnContext = 'כן',
	rejectBtnContext = 'לא',
}) => {
	const [isChecked, setIsChecked] = useState<boolean>();

	useEffect(() => {
		if (defaultValue === undefined) {
			setIsChecked(false);
			return;
		}
		setIsChecked(defaultValue as boolean);
	}, [defaultValue]);
	return (
		<div className='mb-6'>
			<div className='block text-gray-700 text-sm font-bold mb-2'>{label}</div>
			<div className='flex space-x-4 space-x-reverse items-baseline group'>
				<div className='flex w-full gap-2'>
					<div className='w-1/2'>
						<input
							{...register(formRegisterName)}
							type='radio'
							value='false'
							name={formRegisterName}
							id={`${formRegisterName}_false`}
							className='peer hidden'
							checked={!isChecked}
							onClick={() => setIsChecked(false)}
						/>
						<label
							htmlFor={`${formRegisterName}_false`}
							className='cursor-pointer block w-full text-center peer-checked:bg-gray-800 peer-checked:text-white peer-checked:hover:bg-gray-700 peer-checked:focus:outline-none peer-checked:focus:ring-2 peer-checked:focus:ring-gray-600 peer-checked:disabled:opacity-70 peer-checked:disabled:cursor-not-allowed bg-gray-50 text-gray-800 py-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
						>
							{rejectBtnContext}
						</label>
					</div>
					<div className='w-1/2'>
						<input
							{...register(formRegisterName)}
							type='radio'
							value='true'
							name={formRegisterName}
							id={`${formRegisterName}_true`}
							className='peer hidden'
							checked={isChecked}
							onClick={() => setIsChecked(true)}
						/>
						<label
							htmlFor={`${formRegisterName}_true`}
							className='cursor-pointer block w-full text-center peer-checked:bg-gray-800 peer-checked:text-white peer-checked:hover:bg-gray-700 peer-checked:focus:outline-none peer-checked:focus:ring-2 peer-checked:focus:ring-gray-600 peer-checked:disabled:opacity-70 peer-checked:disabled:cursor-not-allowed bg-gray-50 text-gray-800 py-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
						>
							{acceptBtnContext}
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormInputSwitchRadio;
