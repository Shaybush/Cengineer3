import { FC, useEffect, useRef } from 'react';
import { FieldErrors, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

// TODO - move interface to models folder
interface IFormInputFilePropsModel {
	label: string;
	formRegisterName: string;
	defaultValue?: File;
	register: UseFormRegister<any>;
	errors: FieldErrors<FieldValues>;
	validation: RegisterOptions<any, string> | undefined;
}

const FormInputFile: FC<IFormInputFilePropsModel> = ({
	label,
	formRegisterName,
	defaultValue,
	register,
	errors,
	validation,
}) => {
	const inputFile = useRef<any>(null);

	useEffect(() => {
		if (inputFile.current && defaultValue) {
			const dataTransfer = new DataTransfer();
			dataTransfer.items.add(defaultValue);
			inputFile.current.files = dataTransfer.files;
		}
	}, [defaultValue]);

	// Function to reset the input element
	const handleReset = () => {
		if (inputFile.current) {
			inputFile.current.value = '';
			inputFile.current.type = 'text';
			inputFile.current.type = 'file';
		}
	};

	// TODO - figure out why register doesn't response with any file

	const errorMessage = errors[formRegisterName]?.message as string;
	return (
		<div className='mb-6'>
			<label className='block text-gray-700 text-sm font-bold mb-2'>{label}</label>
			<div className='relative'>
				<input
					className={`block w-full max-w-[calc(100%-25px)] text-sm text-gray-700 border-[1px] border-gray-700 rounded outline-none active:border-black focus:border-black active:outline-none focus:outline-none
       	file:py-2 file:px-4 file:rounded-md file:cursor-pointer file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700
        hover:file:bg-gray-100" ${errors[formRegisterName] ? 'border-red-500' : ''}`}
					{...register(formRegisterName, validation)}
					ref={inputFile}
					type='file'
				/>
				<button type='button' onClick={handleReset} className='absolute top-2 left-2 z-10'>
					X
				</button>
			</div>

			{errors[formRegisterName] && <small className='text-red-500 text-xs italic px-1'>{errorMessage}</small>}
		</div>
	);
};

export default FormInputFile;
