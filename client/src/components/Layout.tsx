import { Link, Outlet, useLocation } from 'react-router-dom';
import SlideBar from './SlideBar';
const Layout = () => {
  const loction = useLocation();

  return (
    <div className="h-dvh flex flex-col ">
			<h1 className='px-5 mt-2' >Cengineer3</h1>
      <div className="p-5 grow">
        <div className="flex size-full relative rounded-lg overflow-hidden">
          <SlideBar />
          <div
            className={`absolute ${
              loction.pathname !== '/dashboard' && '-z-10'
            } inset-0 sm:relative grow border bg-gray-200`}
          >
						<div className="flex gap-3 h-16  bg-blue-400">
							<Link to={'/'} >prev</Link>
							<h1 className="">content bar</h1>
						</div>
						<Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout