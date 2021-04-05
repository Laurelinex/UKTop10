import React, {useEffect, useState} from 'react';
import BookList from '../components/BookList';
// import BookDetail from '../components/BookDetail';

const BookContainer = () => {

    const [allBooks, setAllBooks] = useState([]);
    // const [selectedBook, setSelectedBook] = useState(null);

    const getAllBooks = () => {
        console.log("Fetching books...")
        fetch('https://rss.itunes.apple.com/api/v1/gb/books/top-paid/all/10/explicit.json')
        .then(res => res.json())
        .then(data => setAllBooks(data.feed.results))
    }

    useEffect(() => {
        getAllBooks();
    }, []);

    // const handleSelectedBook = (book) => {
    //     setSelectedBook(book);
    // }

    return(
        <div className="book-container">
            <BookList books={allBooks} />
            {/* <BookDetail book={selectedBook}/> */}
        </div>
    )
}

export default BookContainer;