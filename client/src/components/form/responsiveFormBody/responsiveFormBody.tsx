import React, { FC } from 'react';

// TODO - move interface to models folder
interface IFormBodyParamsModel {
	children: React.ReactNode;
	reduceHeight?: number;
}

const ResponsiveFormBody: FC<IFormBodyParamsModel> = ({ children, reduceHeight = 350 }) => {
	return <div className={`max-h-[calc(100vh-${reduceHeight}px)] overflow-y-auto scrollbar`}>{children}</div>;
};

export default ResponsiveFormBody;
