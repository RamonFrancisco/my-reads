import React, { useState, useEffect } from 'react';
import * as BooksAPI from './BooksAPI';
import Search from './components/Search';
import ListBook from './components/ListBooks';
import './App.css'

export default function BooksApp(props) {
	
	const [books, setBooks] = useState([]);
	const [shelfs, setShelfs] = useState([]);
	
	const [showSearchPage, setShowSearchPage ] = useState(false);
	
	/**
	* TODO: Instead of using this state variable to keep track of which page
	* we're on, use the URL in the browser's address bar. This will ensure that
	* users can use the browser's back and forward buttons to navigate between
	* pages, as well as provide a good URL they can bookmark and share.
	*/
	
	useEffect(() => {
		BooksAPI.getAll()
		.then( books => {
			setBooks( books )
		})
		
	}) 
	
	return (
		<div className="app">
			{showSearchPage ? (
				<Search />
			) : (
				<ListBook books={ books } />
			)}
		</div>
	)
}