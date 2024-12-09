import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);
  const {
    image,
    bookName,
    author,
    review,
    tags,
    publisher,
    yearOfPublishing,
    category,
    totalPages,
    rating,
  } = book;
  return (
    <div className="flex flex-row gap-10 text-start mb-24">
      <div className="p-12 bg-gray-200 rounded-xl">
        <img className="w-28 " src={image} alt={bookName} />
      </div>
      <div className="space-y-3">
        <p className="text-4xl font-bold o ">{bookName}</p>
        <p className="text-xl">By: {author}</p>
        <div className="border"></div>
        <p>{category}</p>
        <div className="border"></div>
        <p>
          <span className="font-bold">Review: </span> {review}
        </p>
        <div className="space-x-2">
          {" "}
          <span className="font-bold text-xl">Tag </span>
          {tags.map((tag, index) => (
            <button
              key={index}
              className="btn btn-xs text-green-800 bg-green-200"
            >
              #{tag}
            </button>
          ))}
        </div>
        <div className="border"></div>
        <div className="flex gap-14">
          <div className="text-gray-600">
            <p>Number of Pages: </p>
            <p>Publisher: </p>
            <p>Year of Publishing: </p>
            <p>Ratings: </p>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">{totalPages}</span>
            <span className="font-bold">{publisher}</span>
            <span className="font-bold">{yearOfPublishing}</span>
            <span className="font-bold">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
