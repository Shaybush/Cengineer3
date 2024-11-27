import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export default function PageLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<div className='flex h-16 gap-3 bg-light-blue'>
				<Link to={'/'}>prev</Link>
				<h1>content bar</h1>
			</div>
			{children}
		</>
	);
}
