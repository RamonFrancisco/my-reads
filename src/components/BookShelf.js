import React from 'react';
import Book from './Book';

const BookShelf = ({ shelfs, books, moveShelf }) => {
	return (
		shelfs.map( shelf => (
		
			<div className="bookshelf" >
				<h2 className="bookshelf-title">{shelf.title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{ books.filter( book => shelf.value.split(' ').join('') === book.shelf)
							.map( book => (
								<li key={ book.id }>
									<Book 
										shelfs={ shelfs }
										shelfValue={ shelf.value }
										book={ book }
										moveShelf={ moveShelf } />
								</li>
							)
						)}
					</ol>
				</div>
			</div>
		))
	);
	
}

export default BookShelf;