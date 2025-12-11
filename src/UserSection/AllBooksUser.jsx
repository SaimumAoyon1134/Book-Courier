import React, { useEffect, useState } from "react";
import instance from "../Axios/instance";
import { Link } from "react-router-dom";

const AllBooksUser = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance
      .get("/books")
      .then((res) => {
    
        const publishedBooks = res.data.filter(
          (book) => book.status === "published"
        );
        setBooks(publishedBooks);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 font-semibold">
        Loading books...
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="text-center py-20 font-semibold ">
        No published books available
      </div>
    );
  }

  return (
    <div className="px-5 md:px-10 py-6">
      <h1 className="text-xl font-bold text-center mb-8">
        📚 Available Books
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {books.map((book) => (
          <div
            key={book._id}
            className="rounded-lg shadow-md hover:shadow-lg transition "
          >
            <img
              src={book.image}
              alt={book.name}
              className="h-48 w-full object-cover rounded-t-lg"
            />

            <div className="p-4">
              <h2 className="font-bold text-lg truncate">
                {book.name}
              </h2>

              <p className="text-sm ">
                by {book.author}
              </p>

              <p className="text-[#f75408] font-semibold mt-2">
                ৳ {book.price}
              </p>

              <Link
                to={`/book-details/${book._id}`}
                className="inline-block mt-4  w-full text-center text-sm text-white bg-[#ef610e] px-4 py-2 rounded-4xl hover:opacity-90"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooksUser;