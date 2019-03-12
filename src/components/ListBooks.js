import React, { Component } from 'react';
import BookShelf from './BookShelf';

class ListBooks extends Component {
    state = {
        books: []
    }


    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf books={this.state.books} title="Currently Reading" />
                        <BookShelf books={this.state.books} title="Want to Read" />
                        <BookShelf books={this.state.books} title="Read" />
                        
                    </div>
                </div>
                <div className="open-search">
                    <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div>
          </div>
        );
    }
}

export default ListBooks; 