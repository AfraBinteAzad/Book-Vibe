import React, { useEffect, useState } from 'react'

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
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 justify-center it'>
        {allbooks.map((book, bookId) => (
          
          <div key={bookId} className='mt-4'>
          <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-5 pt-5 ">
    <img
      src={book.image}
      alt={book.bookName}
      className="rounded-xl w-[150px] h-[250px] md:w-[200px] md:h-[300px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
          </div>
       
      ))}
      </div>
    </div>
  )
}
