import React from 'react';
import BookCard from './BookCard'

const BookList = (props) => {
   
  return (
    <div className="list">
         {
             props.books.map((book, i) => {
                 return <BookCard
                            key={book.id}
                            id={book.id}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            published={book.volumeInfo.publishedDate}
                            description={book.volumeInfo.description}
                            links={book.volumeInfo.req}
                            handleSaved={props.handleSaved}
                 
                     />
             })
         }
    </div>
  );
}

export default BookList;
