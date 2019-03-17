import React from 'react';
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
				<button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
			</div>
	  </div>
	);
}

export default ListBooks;