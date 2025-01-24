import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Login = lazy(() => import('./views/login'));
const Dashboard = lazy(() => import('./views/dashboard'));
const RoomCreate = lazy(() => import('./views/roomCreat'));
const RoomEdit = lazy(() => import('./views/roomEdit'));
const Profile = lazy(() => import('./views/profile'));
const ProfileEdit = lazy(() => import('./views/profileEdit'));
const NotFound = lazy(() => import('./views/NotFound'));
const Layout = lazy(() => import('./components/Layout'));

const AppRoutes: React.FC = () => {
	return (
		<Router basename={import.meta.env.NODE_ENV === 'production' ? '/Cengineer3' : ''}>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='login' element={<Login />} />
					<Route path='/' element={<Layout />}>
						<Route index element={<Dashboard />} />
						{/* <Route path='/:roomId' element={<div className='bg-light-gray'>Inside room</div>}></Route> */}
						<Route path='new-room' element={<RoomCreate />} />
						<Route path='edit-room' element={<RoomEdit />} />
						<Route path='profile' element={<Profile />} />
						<Route path='profile-edit' element={<ProfileEdit />} />
						<Route path='*' element={<NotFound />} />
					</Route>
				</Routes>
			</Suspense>
		</Router>
	);
};

export default AppRoutes;
