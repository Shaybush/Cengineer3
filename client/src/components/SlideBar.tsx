import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

const SlideBar: FC = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<div className={`relative grow  ${toggle ? 'sm:max-w-5' : 'sm:max-w-[300px]'} transition-all duration-500`}>
			<button
				className='absolute right-0 top-[50%] z-10 hidden h-10 w-10 translate-x-1/2 rounded-full bg-slate-600 sm:block'
				onClick={() => setToggle(!toggle)}
			>
				{toggle ? '>' : '<'}
			</button>
			<div className={` overflow-hidden border bg-blue-200 h-full text-nowrap ${!toggle ? 'text-black' : 'sm:text-transparent'} `}>
				<h1 className='h-16 bg-blue-400'>side bar</h1>
				<Link to={'/dashboard'}>moses</Link>
			</div>
		</div>
	);
};

export default SlideBar;