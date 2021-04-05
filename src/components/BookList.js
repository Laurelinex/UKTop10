const BookList = ({books, loaded, onBookSelected}) => {

    if (!loaded) {
        return <p>Loading...</p>
    }

    const bookListItems = books.map((book, index) => {
        return <li key={index} onClick={() => onBookSelected(book)}>{book.name}</li>
    })

    return(
        <div className="item-list">
            <ol>{bookListItems}</ol>
        </div>
    )
}

export default BookList;