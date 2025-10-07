import React from 'react'

export default function ListedBooks() {
  return (
    <div className='m-6'>
   
<div className="tabs tabs-lift">
  <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Books" />
  <div className="tab-content bg-base-100 border-base-300 p-6">

  </div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist Books" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6">
    
  </div>
</div>
    </div>
  )
}
