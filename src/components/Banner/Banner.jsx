import React from 'react'
import book from "../../assets/books.jpg"

export default function Banner() {
  return (
    <div className='flex mx-w-[1200px] mx-auto gap-3 p-4 justify-center items-center bg-gray-200 rounded-2xl m-4'>
      <div className='flex flex-col gap-1 md:gap-3 justify-start items-start p-3'>
      <p className='font-bold text-3xl md:text-5xl p-5'>Books to freshen up <br/> your bookshelf</p>
      <button className='text-white m-5 font-semibold md:font-bold bg-[#23BE0A]  p-2 md:p-3 rounded-[8px]'>View The List</button>
      </div>
      <div>
        <img src={book} alt="" className='rounded-2xl'/>
      </div>
    </div>
  )
}
