import React, { useState } from 'react';
import BookShelf from './BookShelf';

export default function ListBooks(props){
	
	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<div className="list-books-content">
				<div>
					<BookShelf books={props.books} title="currently Reading" />
					<BookShelf books={props.books} title="want To Read" />
					<BookShelf books={props.books} title="read" />
				</div>
			</div>
			<div className="open-search">
				<button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
			</div>
	  </div>
	);
}