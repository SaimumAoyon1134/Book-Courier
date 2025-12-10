import React, { useContext, useEffect, useState } from "react";
import instance from "../Axios/instance";
import { AuthContext } from "../Context/AuthContext";
import Loading from "../Shared/Loading";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Swal from "sweetalert2";

const AllBooks = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useContext(AuthContext);
  const [books, setBooks] = useState([]);

  // Fetch books
  useEffect(() => {
    if (user?.email) {
      instance
        .get("/books")
        .then((res) => setBooks(res.data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  if (isLoading) return <Loading />;

  // Toggle book status
  const handleToggle = (book) => {
    Swal.fire({
      title: "Change book status?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const newStatus =
          book.status === "published" ? "pending" : "published";

        instance
          .patch(`/books-admin/${book._id}`, { status: newStatus })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              setBooks((prevBooks) =>
                prevBooks.map((b) =>
                  b._id === book._id ? { ...b, status: newStatus } : b
                )
              );
              Swal.fire("Updated!", "", "success");
            }
          })
          .catch((err) => console.error(err));
      }
    });
  };

  return (
    <div className="min-h-screen flex justify-center px-4">
      <div className="w-full animate__animated animate__fadeInDown rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          All Books
        </h2>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Book</th>
                <th>Author</th>
                <th>Added By</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {books.map((book, index) => (
                <tr key={book._id} className="hover:scale-[1.03]">
                  <td>{index + 1}</td>

                  <td className="flex items-center gap-3">
                    <img
                      src={book.image}
                      alt=""
                      className="w-12 h-12 rounded"
                    />
                    <span className="font-bold">{book.name}</span>
                  </td>

                  <td className="text-amber-600 font-bold">{book.author}</td>

                  <td className="text-blue-600 font-bold">
                    {book.user || "N/A"}
                  </td>

                  <td className="text-purple-600 font-bold">{book.price}</td>

                  <td>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={book.status === "published"}
                      onClick={() => handleToggle(book)}
                      readOnly
                    />
                    <span
                      className={`ml-2 font-bold ${
                        book.status === "published"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
                    </span>
                  </td>

                  <td>
                    <button
                      className="btn btn-ghost"
                      
                    >
                      <DeleteForeverIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;