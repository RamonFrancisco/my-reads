import React, { useState } from 'react';

const SelectShelf = (props) => {
	
	const [ value, setValue ] = useState(props.value);
	
	const changeShelf = e => {
	    props.moveShelf( props.id, e.target.value)
	    setValue( e.target.value );
	}

	return (
		<select value={value} onChange={e => changeShelf(e) }>
			<option value="move" disabled>Move to...</option>
			{ props.shelfs.map( shelf => (<option key={shelf.value} value={shelf.value}>{shelf.title}</option>) ) }
			<option value="none">None</option>
		</select>
	)
}

export default SelectShelf;