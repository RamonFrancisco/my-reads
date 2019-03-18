import React, { useState } from 'react';
import * as BooksAPI from '../utils/BooksAPI';
import Book from './Book';
import sortBy from 'sort-by';

const Search = props => {
	
	const { shelfs, moveShelf } = props;
	
	const [ text, setText ] =useState('');
	const [ books, setBooks ] = useState([])
	const [ query, setQuery ] = useState('')
	
	const searchBook = newQuery => {
		if ( newQuery !== '' ) { setText('No results') };
		setQuery( newQuery ) 
		
		if (newQuery === '' ) {
			setText('');
			setBooks([]);
			return
		}
		
		if ( newQuery ) {
			BooksAPI.search( newQuery )
			.then( data => {
				if( data !== undefined && data && !data.error ) {
					data.sort( sortBy('title') )
					setBooks( data )
				} else {
					setBooks( [] )  
				}
			})
			.catch( err => {
				console.log(err)
				setBooks( [] )
			} )
		}
	}
	
	return (
		<div className="search-books">
			<div className="search-books-bar">
				<button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
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
					{ ( books.length === 0 ) ? (
						<p>{text}</p>
					) : (
						books.map( book => (
							<li key={book.id} >
								<Book
									book={ book }
									shelfs={ shelfs }
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