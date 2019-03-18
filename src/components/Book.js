import React from 'react';
import SelectShelf from './SelectShelf';

const Book = (props) => {
	
	const { book, shelfs, moveShelf } = props;

	return (
		<div className="book">
			<div className="book-top">
				<div className="book-cover" style={{
					width: 128,
					height: 193,
					backgroundImage: `url("${book.imageLinks.thumbnail}")` }}>
				</div>
				<div className="book-shelf-changer">	
					<SelectShelf 
						shelfs={ shelfs }
						value={ book.shelf }
						id={ book }
						moveShelf={ moveShelf } />
				</div>
			</div>
			<div className="book-title">book.title</div>
			{book.authors.map(author => <div key={author} className="book-authors">{author}</div>)}
		</div>
	);
}

export default Book;