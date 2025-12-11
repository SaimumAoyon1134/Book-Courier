import React, { use, useContext, useEffect, useState } from 'react'
import instance from '../Axios/instance';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { AuthContext } from '../Context/AuthContext';
import Loading from '../Shared/Loading';
import { useNavigate } from 'react-router';

const Latest = () => {
  const [latestBooks, setLatestBooks] = useState([]);
  const {isLoading} =useContext(AuthContext);
  const navigate =useNavigate();
  useEffect(() => { 
    instance.get("/latest-books").then((response) => {
      setLatestBooks(response.data);
    }).catch((error) => {
      console.error("Error fetching latest books:", error);
    });
  }, []);   


  return (
    <div className='px-3 md:px-10'>
        <h1 className='text-center text-xl font-bold'><ScheduleIcon className='animate-spin [animation-duration:5s] text-[#748603]'/> <span className='text-[#f75408]'>Latest Books </span></h1>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-5'>
            {
                latestBooks.map((book)=>(
                    <div key={book._id} onClick={()=>{
                        navigate(`/book-details/${book._id}`);
                    }} className='border p-2 rounded-lg flex flex-col items-center'>
                        <img src={book.image} alt={book.name} className='w-full h-40 object-cover rounded-lg mb-2'/>
                        <h2 className='text-center font-extrabold'>{book.name}</h2>
                        <p className='text-center text-[#f75408]'>{book.author}</p>
                        <p className='text-center font-bold'>TK.{book.price}</p>
                    </div>
                ))
            }
        </div>  
    </div>
  )
}

export default Latest