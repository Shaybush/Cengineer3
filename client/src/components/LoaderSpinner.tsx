import { FC } from 'react';

interface ILoaderSpinnerModel {
	color?: string;
	width?: string;
}

const LoaderSpinner: FC<ILoaderSpinnerModel> = ({ color = 'text-dark', width = '100px' }) => {
	return (
		<div className='h-100 w-100 d-flex align-items-center justify-content-center mt-3'>
			<div className={`spinner-border ${color}`} style={{ width, height: width }} role='status'></div>
		</div>
	);
};

export default LoaderSpinner;
