import { FC } from 'react'
import {} from '@fortawesome/react-fontawesome';

interface inputBtnPropsModel {
  placeholder: string;
  icon?: string;
  buttonLabel?: string;
  onClickHandle: () => void
}
 
const InputBtn: FC<inputBtnPropsModel> = ({placeholder = 'Enter email here', onClickHandle}) => {
  return <div>
  <div className="mt-2 flex rounded-md shadow-sm">
    <div className="relative flex grow items-stretch focus-within:z-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        {/* <UsersIcon aria-hidden="true" className="h-5 w-5 text-gray-400" /> */}
      </div>
      <input
        id="email"
        name="email"
        type="email"
        placeholder={placeholder}
        className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
      />
    </div>
    <button
      onClick={onClickHandle}
      type="button"
      className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    >
      {/* <BarsArrowUpIcon aria-hidden="true" className="-ml-0.5 h-5 w-5 text-gray-400" /> */}
      Sort
    </button>
  </div>
</div>
}

export default InputBtn