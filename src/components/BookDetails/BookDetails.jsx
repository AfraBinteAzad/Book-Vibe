import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import { toast } from 'react-toastify'
import { addtostoredDB } from '../../utility/addToDb'
import { addtowishdDB } from '../../utility/wishlistDb'

export default function BookDetails() {
  const { id } = useParams() 
  console.log(id)

  const data = useLoaderData()
  const single = data.find(book => book.bookId === Number(id))
  const notifymarked=(name,id)=>{
    toast(`${name} is Marked as Read ${id}`)
    addtostoredDB(id)
  };

  const notifywish=(name,id)=>{
    toast(`${name} is added to the Wishlist`)
    addtowishdDB(id)  
  }

  return (
    <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 m-4'>
    
   <div className='flex justify-center items-center p-3 w-1/2 h-full bg-[#f0f1f1] rounded-2xl'>
       <img src={single.image} alt="" className='w-[300px] h-[400px] md:w-[400px] md:h-[600px] p-3 rounded-2xl'/>
   </div>
   
    <div className='flex flex-col gap-3 w-1/2'>
     <p className='font-bold text-2xl'>{single.bookName}</p>
    <div className='border-b-1 border-gray-300 mb-2'>
         <p className='font-semibold pb-2'>By: {single.author}</p>
    </div>
    <div className='border-b-1 border-gray-300 mb-2'>
         <p className='text-gray-500 pb-2 font-semibold'>{single.category}</p>
    </div>
     <p className="font-medium text-gray-600 text-left"><span className='font-bold text-black'>Review: </span>{single.review}</p>
     <div className='flex gap-5 w-full border-b-1 border-gray-300 pb-4'>
     <p className='font-bold'>Tags</p>
     {
        single.tags.map((tag,index)=>(
            <span key={index} className="bg-green-100  text-green-800 px-3 py-1 rounded-full text-sm font-medium">
             #{tag}
            </span>
        ))
     }
     </div>
    <p className='text-gray-500 font-medium'>Number of Pages: <span className='font-bold text-black'> {single.totalPages}</span></p>
    <p className='text-gray-500 font-medium'>Publisher: <span className='font-bold text-black'> {single.publisher}</span></p>
    <p className='text-gray-500 font-medium'>Year of Publishing: <span className='font-bold text-black'> {single.yearOfPublishing}</span></p>
    <p className='text-gray-500 font-medium'>Rating: <span className='font-bold text-black'> {single.rating}</span></p>
    <div className='flex gap-3'>
    <button onClick={()=>notifymarked(single.bookName,single.bookId)} className='border-1 font-bold border-gray-300 p-3 rounded-[10px]'>Mark As Read</button>
    <button onClick={()=> notifywish(single.bookName,single.bookId)} className='bg-[#50B1C9] text-white p-3 rounded-[10px]'>Add To Wishlist</button>
    </div>
    </div>
    </div>
  )
}
