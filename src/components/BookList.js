const BookList = ({books}) => {

    const bookListItems = books.map((book, index) => {
        return <li key={index}>{book.name}</li>
    })

    return(
        <div className="book-list">
            <ol>{bookListItems}</ol>
        </div>
    )
}

export default BookList;