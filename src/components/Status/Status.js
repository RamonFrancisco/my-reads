import React from 'react';
import { Route } from 'react-router-dom'; 

const status = ({code, children}) => { 
	
	return (
		<Route render={({ staticContext }) => {
			if( staticContext ) staticContext.status = code;
			return children;
		}} />
	);
}

export default status;