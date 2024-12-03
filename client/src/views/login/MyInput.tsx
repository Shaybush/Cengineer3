import { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<any>;
  name: string;
}

const MyInput = ({ register, name, ...props }: MyInputProps) => {
  return (
    <div className='w-full'>
      <p>{props?.title}</p>
      <div className="flex flex-col relative mt-1">
        <input
          {...props}
          {...register(name)}
        />
        <button
          type="submit"
          className="absolute right-0 bg-blue-500 text-white  rounded-md"
        >
          {name === 'email'? 'send-code' :'Submit'}
        </button>
      </div>
    </div>
  );
};

export default MyInput;