import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "./AddToDBList";
import Book from "../Book";

const ListedBooks = () => {
  const [readlist, setReadList] = useState([]);
  const allBooks = useLoaderData();
  useEffect(() => {
    const storedList = getStoredReadList();
    console.log("store list return", storedList);
    const storedListInt = storedList.map((id) => parseInt(id));
    console.log('booksssalllllll',allBooks);

    const readBookList = allBooks.filter((book) =>
      storedListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);

  return (
    <div>
      <h3 className="text-3xl my-8">Listed Books</h3>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl font-bold">
            Books I read: {readlist.length}
          </h2>
          {readlist.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl font-bold">My wish list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
