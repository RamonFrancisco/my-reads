import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

const ListBooks = (props) => {	
	
	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<div className="list-books-content">
				<div>
					<BookShelf
						books={props.books}
						shelfs={ props.shelfs }
						moveShelf={ props.moveShelf }  />
				</div>
			</div>
			<div className="open-search">
				<Link to="/search">Add a book</Link>
			</div>
	  </div>
	);
}

export default ListBooks;