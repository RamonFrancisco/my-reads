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
					console.log('data-sucess', data)
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
					{/*
					NOTES: The search from BooksAPI is limited to a particular set of search terms.
					You can find these search terms here:
					https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

					However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
					you don't find a specific author or title. Every search is limited by search terms.
					*/}
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