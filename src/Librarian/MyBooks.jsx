import React, { use, useContext, useEffect } from "react";
import instance from "../Axios/instance";
import { AuthContext } from "../Context/AuthContext";
import Loading from "../Shared/Loading";
import { useNavigate } from "react-router";

const MyBooks = () => {
   const navigate = useNavigate();
  const { user, isLoading } = useContext(AuthContext);
  const [books, setBooks] = React.useState([]);
  useEffect(() => {
    if (user?.email) {
      instance
        .get(`/books?user=${user.email}`)
        .then((response) => {
          setBooks(response.data);
        })
        .catch((error) => {
          console.error("Error fetching books:", error);
        });
    }
  }, [user]);
  if (isLoading) return <Loading />;

  return (
    <div className=" flex  min-h-screen justify-center  px-4">
      <div className="w-full   rounded-lg shadow-md p-6 animate__animated animate__fadeInDown">
        <h2 className="text-2xl font-semibold text-center mb-6 ">
          My Books
        </h2>
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th>
                  Serial No.
                </th>
                <th> Book Name</th>
                <th>Author Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => {
                return (
                  <tr key={book._id}
                   className=" hover:scale-[1.01]">
                    <td>
                      <span className="text-purple-600 font-bold">{index + 1}</span>
                    
                    </td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={book.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold ">{book.name}</div>
                          
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="font-bold text-amber-600 ">{book.author}</span>
                    </td>
                    <td><span className="font-bold text-purple-600 ">{book.price}</span></td>
                    <td>
                        {book.status === "published" ? <span className="text-green-500 font-bold">Published</span> : <span className="text-red-500 font-bold">Pending</span>}
                    </td>
                    <td>
                      <button className="btn btn-ghost " onClick={()=>{
                        console.log(book._id)
                        navigate(`/librarian/edit-books/${book._id}`)

                      }}>Edit</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBooks;
