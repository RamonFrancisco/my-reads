import React, { useState } from 'react';

export default function Book(props) {

	const [ books, setBooks ] = useState(props.books);

    function changeShelf(book) {
        book.shelf = document.querySelectorAll('.book-shelf-changer select').value
        console.log(book.shelf)
    }
						
	return (
		<ol className="books-grid">
		{ props.books.filter( book => props.shelf.split(' ').join('') === book.shelf).map( book => (
			<li key={book.id} >
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{
							width: 128,
							height: 193,
							backgroundImage: `url("${book.imageLinks.thumbnail}")` }}>
						</div>
						<div className="book-shelf-changer">
							<select onChange={changeShelf(book)}>
								<option value="move" disabled>Move to...</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
						</div>
					<div className="book-title">{book.title}</div>
					{book.authors.map(author => <div key={author} className="book-authors">{author}</div>)}
				</div>
			</li>
		))}
		</ol>
	);
}