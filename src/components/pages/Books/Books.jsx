import React, { Suspense, useEffect, useState } from 'react'
import star from "../../../assets/star.png"
import { Link } from 'react-router';

export default function Books() {
    const [allbooks,setallbooks]=useState([])
useEffect(() => {
    fetch("/booksData.json") 
      .then((res) => res.json()) 
      .then((data) => setallbooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  return (
    <div className='m-10'>
      <p className='font-bold text-center text-2xl'>Books</p>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 justify-center items-center rounded-2xl'>
       <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
         {allbooks.map((book, bookId) => (
          
         <Link to={'/BookDetails/${bookId}'}>
          <div key={bookId} className='mt-4'>
          <div className="card bg-base-100 shadow-lg">
  <figure className="px-5 pt-5 ">
    <img
      src={book.image}
      alt={book.bookName}
      className="rounded-2xl w-[150px] h-[250px] md:w-[200px] md:h-[300px]" />
  </figure>
  <div className="card-body justify-center items-center text-center">
    <div className='flex gap-3 justify-center items-center'>
    <button className='text-[#23BE0A] font-medium bg-[#deefdc] rounded-[25px] py-2 px-4'>{book.tags[0]}</button>
    <button className='text-[#23BE0A] font-medium bg-[#deefdc] rounded-[25px] py-2 px-4'>{book.tags[1]}</button>
    </div>
    <div >
      <p className='font-bold text-xl md:text-2xl leading-[1.1] line-clamp-1'>{book.bookName}</p>
    </div>
    <div className="border-b  border-gray-300 pb-3 w-full flex flex-col gap-3">
      <p className='font-medium text-gray-500 text-[13px] md:text-[15px]'>By: {book.author}</p>
    </div>
    <div className='flex justify-between w-full'>
     <div>
      <p className='font-medium text-gray-500 text-[13px] md:text-[15px]'>{book.category}</p>
    </div>
    <div className='flex justify-center items-center gap-2'>
       <p className='font-medium text-gray-500 text-[13px] md:text-[15px]'>{book.rating}</p>
       <img src={ star} alt=""  className='w-[15px] h-[15px]'/>
    </div>
    </div>
    </div>
  </div>
</div>
         </Link>
          
       
      ))}
       </Suspense>
      </div>
    </div>
  )
}
