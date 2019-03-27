import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI';
import { findKey } from 'lodash';
import Book from './Book';
import sortBy from 'sort-by';

const Search = ({shelfs, moveShelf, books}) => {
	
	const [ text, setText ] = useState('');
	const [ newBooks, setNewBooks ] = useState([])
	const [ query, setQuery ] = useState('')

	const mergeBooks = findbooks => {
		if (findbooks.error) return [];

		return findbooks.map(book => {
			let findObject = findKey(books, { id: book.id });
			if (findObject) book.shelf = books[findObject].shelf;

			return book;
		});
	}
	
	const searchBook = newQuery => {
		if ( newQuery !== '' ) { setText('No results') };
		setQuery( newQuery ) 
		
		if (newQuery === '' ) {
			setText('');
			return;
		}
		
		if ( newQuery.length > 3 ) {
			BooksAPI.search(query)
			.then(mergeBooks)
			.then(data => {
				if (data !== undefined && data && !data.error) {
					data.sort(sortBy('title'))
					setNewBooks(data);
				}
			});
		}
	}
	
	return (
		<div className="search-books">
			<div className="search-books-bar">
				<Link className="close-search" to="/" >Close</Link>
				<div className="search-books-input-wrapper">
					<input 
						type="text"
						placeholder="Search by title or author" 
						value={ query }
						onChange={ e => searchBook( e.target.value ) } />
				</div>
			</div>
			<div className="search-books-results">
				<ol className="books-grid">
					{(newBooks.length === 0 ) ? (
						<p>{text}</p>
					) : (
						newBooks.map( book => (
							<li key={book.id} >
								<Book
									book={ book }
									shelfs={ shelfs }
									shelfValue={ book.shelf }
									moveShelf={ moveShelf }  />
							</li>
						))
					) }
					
				</ol>
			</div>
	  </div>
	);
}

export default Search;