import React, { useEffect, useState } from "react";
import Book from "./Book";


const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect( () => {
    fetch('/src/assets/booksData.json')
    .then(res => res.json())
    .then(data => setBooks(data))
  },[])

  return (
    <div>
      <h1 className="text-4xl text-center font-bold mt-20">Books</h1>
      <p>All books: {books.length}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center items-center mb-32 ">
        {
            books.map( book => <Book key={book.bookId} book={book}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;
