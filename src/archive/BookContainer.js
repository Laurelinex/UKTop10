import React, {useEffect, useState} from 'react';
import BookList from '../components/BookList';
import BookDetail from '../components/BookDetail';

const BookContainer = () => {

    const [allBooks, setAllBooks] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    const getAllBooks = () => {
        console.log("Fetching books...")
        fetch('https://rss.itunes.apple.com/api/v1/gb/books/top-paid/all/10/explicit.json')
        // fetch('https://cors-anywhere.herokuapp.com/rss.itunes.apple.com/api/v1/gb/books/top-paid/all/10/explicit.json')
        .then(res => res.json())
        .then(data => setAllBooks(data.feed.results))
        .then(() => setLoaded(true))
    }

    useEffect(() => {
        getAllBooks();
    }, []);

    const handleSelectedBook = (book) => {
        setSelectedBook(book);
    }

    return(
        <div className="item-container">
            <BookList books={allBooks} loaded={loaded} onBookSelected={handleSelectedBook}/>
            <BookDetail book={selectedBook}/>
        </div>
    )
}

export default BookContainer;