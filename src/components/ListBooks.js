import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

const ListBooks = ({books, shelfs, moveShelf, bookDetails}) => {	
	
	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<div className="list-books-content">
				<div>
					<BookShelf
						books={ books }
						shelfs={ shelfs }
						moveShelf={ moveShelf }
						bookDetails={ bookDetails } />
				</div>
			</div>
			<div className="open-search">
				<Link to="/search">Add a book</Link>
			</div>
	  </div>
	);
}

export default ListBooks;