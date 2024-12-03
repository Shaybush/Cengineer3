import React, { FC, ReactNode } from 'react';

interface InputBtnProps {
  placeholder: string;
  buttonLabel: string;
  id: string;
  onClickHandle?: () => void;
  btnType?: HTMLButtonElement['type'];
  type?: HTMLInputElement['type'];
  name?: string;
  children?: ReactNode;
}

const InputBtn: FC<InputBtnProps> & {
  InputIcon: FC<{ children: ReactNode }>;
  ButtonIcon: FC<{ children: ReactNode }>;
} = ({
  placeholder,
  buttonLabel,
  id,
  onClickHandle,
  btnType = 'button',
  type = 'text',
  name = '',
  children,
}) => {
  let inputIcon: ReactNode = null;
  let buttonIcon: ReactNode = null;

  // extract inputIcon and buttonIcon from children
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === InputBtn.InputIcon) {
      inputIcon = child.props.children;
    }
    if (React.isValidElement(child) && child.type === InputBtn.ButtonIcon) {
      // @ts-ignore
      buttonIcon = child.props?.children;
    }
  });

  return (
    <div>
      <div className="mt-2 flex rounded-md shadow-sm">
        <div className="relative flex grow items-stretch focus-within:z-10">
          {/* Input Icon */}
          {inputIcon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              {inputIcon}
            </div>
          )}
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            className={`block w-full rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-blue sm:text-sm/6 ${
              inputIcon ? 'pl-10' : 'pl-2'
            }`}
          />
        </div>
        <button
          onClick={onClickHandle || (() => {})}
          type={btnType}
          className="relative -ml-16 z-10 inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset"
        >
          {/* button icon */}
          {buttonIcon}
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

// compound components
InputBtn.InputIcon = ({ children }: { children: ReactNode }) => <>{children}</>;
InputBtn.ButtonIcon = ({ children }: { children: ReactNode }) => <>{children}</>;

export default InputBtn;