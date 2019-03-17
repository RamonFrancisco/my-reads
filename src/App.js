import React, { useState, useEffect } from 'react';
import * as BooksAPI from './utils/BooksAPI';
import Search from './components/Search';
import ListBook from './components/ListBooks';
import './App.css'

const BooksApp = (props) => {
	
	const shelfs = [
		{
			value: 'currentlyReading',
			title: 'Currently Reading'
		},
		{
			value: 'wantToRead',
			title: 'Want to Read'
		},
		{
			value: 'read',
			title: 'Read'
		},
	]
	
	const [books, setBooks] = useState([]);
	
	const [showSearchPage, setShowSearchPage ] = useState(true);
	
	/**
	* TODO: Instead of using this state variable to keep track of which page
	* we're on, use the URL in the browser's address bar. This will ensure that
	* users can use the browser's back and forward buttons to navigate between
	* pages, as well as provide a good URL they can bookmark and share.
	*/
	
	useEffect(() => {
		BooksAPI.getAll()
		.then( books => setBooks( books ) )
	});
	 
	const moveShelf = (book, shelf) => {
		BooksAPI.update(book, shelf)
			.then( useEffect )
	} 
	
	return (
		<div className="app">
			{showSearchPage ? (
				<Search 
					books={ books }
					moveShelf={ moveShelf }
					shelfs={ shelfs } />
			) : (
				<ListBook 
					books={ books }
					shelfs={ shelfs }
					moveShelf={ moveShelf } />
			)}
		</div>
	)
}

export default BooksApp;