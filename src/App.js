import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import Search from './components/Search';
import ListBook from './components/ListBooks';
import NotFound from './components/NotFound/NotFound';
import BookDetails from './components/BookDetails/BookDetails';
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
	

	const [ book, setBook ] = useState({});
	const [books, setBooks] = useState([]);
	
	useEffect(() => {
		BooksAPI.getAll()
		.then( books => setBooks( books ) )
	});
	 
	const moveShelf = (book, shelf) => {
		BooksAPI.update(book, shelf)
			.then( useEffect )
	}

	const bookDetails = (id) => {
		BooksAPI.get(id)
			.then( data => setBook(data))
	}
	
	return (
		<div className="app">
			<Switch>
				<Route exact path="/" render={() => (
					<ListBook 
						books={ books }
						shelfs={ shelfs }
						moveShelf={ moveShelf } 
						bookDetails={ bookDetails } />
				)} />
				<Route path="/search" render={() => (
					<Search 
						books={ books }
						moveShelf={ moveShelf }
						shelfs={ shelfs } />
				)} />

				<Route path="/book" render={() => (
					<BookDetails book={ book } />
				)} />
				
				<Route component={ NotFound } />
			</Switch>
			 
		</div>
	)
}

export default BooksApp;