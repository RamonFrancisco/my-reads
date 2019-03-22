import React, { useState } from 'react';

const SelectShelf = ({shelfValue, shelfs, id, moveShelf}) => {
	
	const [value, setValue] = useState(shelfValue);
	
	const changeShelf = e => {
		moveShelf( id, e.target.value)
		setValue( e.target.value );
	}

	return (
		<select value={value} onChange={e => changeShelf(e) }>
			<option value="move" disabled>Move to...</option>
			{ shelfs.map( shelf => (
				<option key={shelf.value} value={shelf.value}>{shelf.title}</option>
			))}
			<option value="none">None</option>
		</select>
	)
}

export default SelectShelf;