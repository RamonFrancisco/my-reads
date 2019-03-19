import React from 'react';
import Book from './Book';

const BookGrid = (props) => {
	
	const { shelfs, books, moveShelf, shelf } = props;
 	
	return (
		<div className="bookshelf-books">
			<ol className="books-grid">
				{ books.filter( book => shelf.value.split(' ').join('') === book.shelf)
					.map( book => (
						<li key={book.id}>
							<Book 
								shelfs={ shelfs }
								shelfValue={shelf.value}
								book={ book }
								moveShelf={ moveShelf } />
						</li>
					)
				)}
			</ol>
		</div>
	)
}

export default BookGrid;