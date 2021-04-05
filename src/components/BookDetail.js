const BookDetail = ({book}) => {
    if(!book) {
        return (
            <div className="item-detail">
                <p>Pick a book to know more!</p>
            </div>
        )
    }

    return (
        <div className="item-detail">
            <h3>{book.name}</h3>
            <h4>Author: {book.artistName}</h4>
            <p>Genre: {book.genres[0].name}</p>
            <img src={book.artworkUrl100} alt="Book cover"/>
        </div>
    )
}

export default BookDetail;