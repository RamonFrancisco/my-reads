import React from 'react';
import Status from '../Status/Status'

export default function NotFound() {
	return (
		<Status code={404} >
			<div>
				<h1>Deu ruim fio </h1> 
			</div>
		</Status>
	);
} 