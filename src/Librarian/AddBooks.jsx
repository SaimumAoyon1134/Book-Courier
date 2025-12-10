import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import instance from "../Axios/instance";

import { AuthContext } from "../Context/AuthContext";
const AddBook = () => {
    const {user}=useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    data.user=user?.email;
    data.addedAt=new Date().toISOString();
    console.log("Book Data:", data);
    instance
      .post("/books", data)
      .then((response) => {
        console.log("Book added successfully:", response.data);
        alert("Book added successfully!");
      })
      .catch((error) => {
        console.error("Error adding book:", error);
        alert("Failed to add book. Please try again.");
      });

    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
       
      <div className="w-full max-w-lg  rounded-lg shadow-md p-6 animate__animated animate__fadeInDown">
        <h2 className="text-2xl font-semibold text-center mb-6 ">
          Add New Book
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Book Name */}
          <div >
            <label className="block text-sm font-medium ">
              Book Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Book name is required" })}
              className="mt-1 w-full rounded-md border  px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-medium ">
              Author
            </label>
            <input
              type="text"
              {...register("author", { required: "Author name is required" })}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.author && (
              <p className="text-red-500 text-sm mt-1">
                {errors.author.message}
              </p>
            )}
          </div>

          {/* Book Image */}
          <div>
            <label className="block text-sm font-medium ">
              Book Image URL
            </label>
            <input
              type="text"
              {...register("image", { required: "Image URL is required" })}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium ">
              Status
            </label>
            <select
              {...register("status", { required: true })}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select status</option>
              <option value="published">Published</option>
              <option value="unpublished">Unpublished</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium ">
              Price
            </label>
            <input
              type="number"
              step="0.01"
              {...register("price", {
                required: "Price is required",
                min: 0,
              })}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Description (Optional) */}
          <div>
            <label className="block text-sm font-medium ">
              Description
            </label>
            <textarea
              {...register("description")}
              rows="3"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

         
          <button
            type="submit"
            className="w-full col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition duration-200"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;