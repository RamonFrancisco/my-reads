import React from 'react';
import { Link } from 'react-router-dom';
import SelectShelf from './SelectShelf';

const Book = ({ book, shelfValue, shelfs, moveShelf, bookDetails }) => {

	const thumb = book.imageLinks !== undefined ? book.imageLinks.thumbnail : '',
	title = book.title || 'No title',
	authors =  book.authors || ['No authors'], 
	shelf = shelfValue !== undefined ? shelfValue : 'none' ;

	const getbook = ( id ) => {
		// bookDetails(id);
		console.log(id);
	}

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
			<Link to="/book/" onClick={e => getbook(e)} className="book-title">{title}</Link>
			{ authors.map(author => <div key={author} className="book-authors">{author}</div>)}
		</div>
	);
}

export default Book;