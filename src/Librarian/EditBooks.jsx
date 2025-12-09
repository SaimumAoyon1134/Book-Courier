    import { useParams } from "react-router-dom";
    import { useEffect, useState } from "react";
    import instance from "../Axios/instance";
import { useForm } from "react-hook-form";

    const EditBooks = () => {
      const { id } = useParams();
      const [book,setBook]=useState({});
        const {
          register,
          handleSubmit,
          formState: { errors },
          reset,
        } = useForm();

        
      

      useEffect(() => {
        if (!id) return;

        instance
          .get(`/books/${id}`) 
          .then((res) => {
            setBook(res.data);
          })
          .catch((err) => {
            console.error(err);
          });
      }, [id]);

      console.log(book);
      const onSubmit =(data)=>{
        instance.put(`books/${id}`,data)
        .then((res)=>{
            if(res.data.modifiedCount=='1'){
                alert("Update Successfully");
            }
            
        })
        .catch((err)=>{
            console.log(err)
        }
    )
     
      }

      return (<div className="min-h-screen flex  justify-center bg-gray-100 px-4">
       
      <div className="w-full  bg-white rounded-lg shadow-md p-6 animate__animated animate__fadeInDown">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Update Book Information
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          
          <div >
            <label className="block text-sm font-medium text-gray-700">
              Book Name
            </label>
            <input
              type="text"
                defaultValue={book.name}
              {...register("name", { required: "Book name is required" })}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Author
            </label>
            <input
              type="text"
              defaultValue={book.author}
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
            <label className="block text-sm font-medium text-gray-700">
              Book Image URL
            </label>
            <input
            defaultValue={book.image}
              type="text"
              {...register("image", { required: "Image URL is required" })}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
        
              {...register("status", { required: true })}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select status</option>
              <option  value="published">Published</option>
              <option value="unpublished">Unpublished</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              defaultValue={book.price}
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
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              {...register("description")}
              defaultValue={book.description}
              rows="3"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

         
          <button
            type="submit"
            className="w-full col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition duration-200"
          >
            Update Book Info. 
          </button>
        </form>
      </div>
    </div>);
    };

    export default EditBooks;
    