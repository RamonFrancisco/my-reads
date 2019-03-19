import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
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
			<Route exact path="/" render={() => (
				<ListBook 
					books={ books }
					shelfs={ shelfs }
					moveShelf={ moveShelf } />
			)} />
			<Route path="/search" render={() => (
				<Search 
					books={ books }
					moveShelf={ moveShelf }
					shelfs={ shelfs } />
			 )} />
		</div>
	)
}

export default BooksApp;