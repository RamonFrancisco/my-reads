import React from 'react';
import SelectShelf from './SelectShelf';

const Book = (props) => {

	const { book, shelfValue, shelfs, moveShelf } = props

	const thumb = book.imageLinks !== undefined ? book.imageLinks.thumbnail : '',
	title = book.title || 'No title',
	authors =  book.authors || ['No authors'], 
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
						value={ shelf }
						id={ book }
						moveShelf={ moveShelf } />
				</div>
			</div>
			<div className="book-title">{title}</div>
			{ authors.map(author => <div key={author} className="book-authors">{author}</div>)}
		</div>
	);
}

export default Book;