import React, { useState, useEffect } from 'react';
import Book from './Book';

export default function BookShelf(props) {
	
	// const [books, setBooks] = useState([]);
	
	return (
		<div className="bookshelf" >
			<h2 className="bookshelf-title">{props.title}</h2>
			<div className="bookshelf-books">
				<Book shelf={props.title} books={props.books} />
			</div>
		</div>
	);
	
}