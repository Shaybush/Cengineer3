import { Outlet, useLocation } from 'react-router-dom';
import SideBar from './SideBar';
import { useState } from 'react';
const Layout = () => {
	const loction = useLocation();
	const [toggle, setToggle] = useState(false);

	return (
		<div className='flex h-dvh flex-col'>
			<h1 className='mt-2 px-5'>Cengineer3</h1>
			<div className='grow p-5'>
				<div className='relative flex size-full overflow-hidden rounded-lg'>
					<div
						className={`relative bg-light-gray grow ${toggle ? 'sm:max-w-5' : 'sm:max-w-[300px]'} transition-all duration-500 drop-shadow-lg sm:z-50`}
					>
						<SideBar setToggle={setToggle} toggle={toggle} />
					</div>
					<div
						className={`absolute ${loction.pathname === '/' ? 'translate-x-[100%] opacity-0' : 'translate-x-0 opacity-100'} sm:translate-x-0 sm:opacity-100 inset-0 grow bg-light-gray transition-all duration-200 ease-in-out sm:relative`}
					>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
