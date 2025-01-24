import { FC } from 'react';
import { Link } from 'react-router-dom';
import IconFile from './IconFile/IconFile';

interface ISideBarProps {
	setToggle: (toggle: boolean) => void;
	toggle: boolean;
}

const SideBar: FC<ISideBarProps> = ({ setToggle, toggle }: ISideBarProps) => {
	return (
		<>
			<button
				className={`p-0 absolute right-0 top-[50%] z-10 hidden  size-12 bg-light-blue translate-x-1/2 rounded-full  sm:flex items-center justify-center transition-all duration-75 ease-in-out ${toggle ? 'rotate-180' : ''}`}
				onClick={() => setToggle(!toggle)}
			>
				<IconFile iconSrc='arrow-left' />
			</button>
			<div className={`h-full overflow-hidden text-nowrap ${!toggle ? 'text-black' : 'sm:text-transparent'} `}>
				<h1 className='h-16 bg-light-blue'>side bar</h1>
				<Link to={'moses'}>moses</Link>
			</div>
		</>
	);
};

export default SideBar;
