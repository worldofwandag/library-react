import React from "react";
import Book from "./ui/Book";
// import data from '../data';
// normally you would import data like this but data isn't defined in this case so you would have to look for something specific.  like so...
import { books } from "../data";
// this import books is like pulling from an api and you could use it below like books.filter.slice etc.  Now if you look below, we use .map so we can map out the books we want with the filters and slices we implemented

const Featured = () => {
  // console.log(data)
  return (
    <section id="featured">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books
            .filter((book) => book.rating === 5)
            .slice(0, 4)
            .map((book) => (
                <Book book={book} key={book.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
