import React from 'react';
import SelectShelf from './SelectShelf';

const Book = ({ book, shelfValue, shelfs, moveShelf }) => {

	const thumb = book.imageLinks !== undefined ? book.imageLinks.thumbnail : '',
	shelf = shelfValue !== undefined ? shelfValue : 'none' ;

	return (
		<div className="book">
			<div className="book-top">
				<div className="book-cover" style={{
					width: 128,
					height: 193,
					backgroundImage: `url("${thumb}")` }}>
				</div>
				<div className="book-shelf-changer">	
					<SelectShelf 
						shelfs={ shelfs }
						shelfValue={ shelf }
						id={ book }
						moveShelf={ moveShelf } />
				</div>
			</div>
			<div className="book-title">{book.title ? book.title : 'No title' }</div>
			<div className="book-authors">{book.authors ? book.authors.join(', ') : 'No authors'}</div>
		</div>
	);
}

export default Book;