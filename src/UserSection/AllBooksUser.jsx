import React, { useEffect, useMemo, useState } from "react";
import instance from "../Axios/instance";
import { Link } from "react-router-dom";

const AllBooksUser = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

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

  
  const filteredBooks = useMemo(() => {
    let data = [...books];

 
    if (search) {
      data = data.filter((book) =>
        book.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    
    if (sort === "low") {
      data.sort((a, b) => a.price - b.price);
    }
    if (sort === "high") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [books, search, sort]);

  if (loading) {
    return (
      <div className="text-center py-20 font-semibold">
        Loading books...
      </div>
    );
  }

  return (
    <div className="px-5 md:px-10 py-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        📚 Available Books
      </h1>

      {/* 🔍 Search & Sort Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center">
        <input
          type="text"
          placeholder="Search by book name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ef610e]"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border px-4 py-2 rounded-lg"
        >
          <option value="">Sort by price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      {/* Books Grid */}
      {filteredBooks.length === 0 ? (
        <div className="text-center py-20 font-semibold text-gray-500">
          No books found
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book._id}
              className="rounded-lg shadow-md hover:shadow-lg transition bg-white"
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

                <p className="text-sm text-gray-600">
                  by {book.author}
                </p>

                <p className="text-[#f75408] font-semibold mt-2">
                  ৳ {book.price}
                </p>

                <Link
                  to={`/book-details/${book._id}`}
                  className="inline-block mt-4 w-full text-center text-sm text-white bg-[#ef610e] px-4 py-2 rounded-full hover:opacity-90"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooksUser;