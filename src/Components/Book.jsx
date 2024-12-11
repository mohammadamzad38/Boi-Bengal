import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {bookId, bookName, image, author, tags, category } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6 ">
        <figure className="bg-gray-300 py-8 rounded-2xl">
          <img src={image} className="h-[166px]" alt={bookName} />
        </figure>
        <div className="card-body flex flex-grow">
          <div className="flex gap-3 ">
            {tags.map((tag, index) => (
              <button key={index} className="btn btn-xs text-green-800 bg-green-200">
                #{tag}
              </button>
            ))}
          </div>
          <h2 className="card-title overflow-hidden">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{author}</p>
          <div className="border border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="rating space-x-3">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
