import React from 'react';
import Status from '../Status/Status'

export default function NotFound() {
	return (
		<Status code={404} >
			<div style={{
				textAlign: 'center'
			}}>
				<h1>Page is not found :(</h1> 
			</div>
		</Status>
	);
} 