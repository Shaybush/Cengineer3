import LoginForm from './LoginForm';
import LogoSolidIcon from '../../core/icons/logo';
const LoginView = () => {
	return (
		<div className='flex flex-col sm:flex-row h-dvh w-full'>
			<LogoSolidIcon styleClass='absolute m-2' />
			<div className=' basis-2/5 min-w-[400px] flex flex-col p-5 sm:items-center sm:justify-center'>
				<div className='mt-[30%] sm:m-0 '>
					<h1 className='text-2xl font-bold'>Welcome to Cengineers3</h1>
					 <LoginForm />
				</div>
			</div>
			<div className='bg-red-100 grow'></div>
		</div>
	);
};

export default LoginView;