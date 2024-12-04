import { Fragment, InputHTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import MyInput from "./MyInput";

type IFormData = {
  email: string;
  code: string;
};

type InputName = "email" | "code";

const inputsFieldsProps: InputHTMLAttributes<HTMLInputElement>[] = [
  {
    type: "email",
    name: "email",
    title: "Enter your email to continue",
    placeholder: "@ Enter email here ",
  },
  {
    type: "text",
    name: "code",
    title: "Check your email for the code",
    placeholder: "Enter code here",
  },
];

const LoginForm = () => {
  const [isFinished, setIsFinished] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const formStates: InputName[] = ["email", "code"];

  const onSubmit = (data: IFormData) => {
    setIsFinished((prev) => (prev + 1) % 2);
    console.log(data);
    
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      {(() => {
        const inputFieldProps = inputsFieldsProps.find(
          (field) => field.name === formStates[isFinished]
        );
        return inputFieldProps && (
          <Fragment key={formStates[isFinished]}>
            <MyInput register={register} name={formStates[isFinished]} {...inputFieldProps}/>
            {errors[formStates[isFinished]] && (
              <p>{errors[formStates[isFinished]]?.message}</p>
            )}
            {<button type="button"  disabled={isFinished === 0} className='text-blue-500 text-center mx-auto underline p-0 bg-transparent disabled:opacity-0 hover:bg-transparent' >Resend code</button>}
          </Fragment>
        );
      })()}
    </form>
  );
};

export default LoginForm;