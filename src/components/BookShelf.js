import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI'
import Book from './Book';
 
class BookShelf extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then( books => {
                this.setState({ books })
            })
    }

    render() {
        const { books } = this.state;

        console.log(books);
        return (
            <div className="bookshelf" >
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <Book shelf={this.props.title} books={this.state.books} />
                </div>
            </div>
        );
    }
}

export default BookShelf;