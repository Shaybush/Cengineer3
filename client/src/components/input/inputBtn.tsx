import { FC } from 'react'

interface inputBtnPropsModel {
  placeholder: string;
  buttonLabel: string;
  id: string;
  onClickHandle?: () => void;
  btnType?: HTMLButtonElement['type'];
  inputIcon?: string;
  buttonIcon?: string;
  type?: HTMLInputElement['type'];
  name?: string;
}

const InputBtn: FC<inputBtnPropsModel> = ({buttonLabel, placeholder, id, onClickHandle, inputIcon, buttonIcon, btnType = 'button',type = 'text', name = '' }) => {
  return <div>
  <div className="mt-2 flex rounded-md shadow-sm">
    <div className="relative flex grow items-stretch focus-within:z-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        {inputIcon ? inputIcon : ''}
      </div>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`block w-full rounded-none rounded-l-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-blue sm:text-sm/6 ${inputIcon ? 'pl-10' : 'pl-2'}`}
      />
    </div>
    <button
      onClick={onClickHandle ? onClickHandle : () => {}}
      type={btnType}
      className="relative -ml-16 z-10 inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset"
    >
      {buttonIcon ? buttonIcon : ''}
      {buttonLabel}
    </button>
  </div>
</div>
}

export default InputBtn