import React, { Suspense, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getstoredbook } from "../../utility/addToDb";
import { getstoredbookwish } from "../../utility/wishlistDb";
import map from "../../assets/map-pin.png";
import people from "../../assets/friend.png";
import page from "../../assets/paper.png";

export default function ListedBooks() {
  const data = useLoaderData();
  const [myreadlist, setMyReadList] = useState([]);
  const [mywishlist, setMyWishList] = useState([]);
  const [activeTab, setActiveTab] = useState("read"); 
  

  useEffect(() => {
    if (!data || !Array.isArray(data)) return;
    const storeddata = getstoredbook() || [];
    const converteddata = storeddata.map((id) => parseInt(id, 10));
    const filteredBooks = data.filter((book) =>
      converteddata.includes(book.bookId)
    );
    setMyReadList(filteredBooks);
  }, [data]);

  useEffect(() => {
    if (!data || !Array.isArray(data)) return;
    const storeddata = getstoredbookwish() || [];
    const converteddata = storeddata.map((id) => parseInt(id, 10));
    const filteredBooks = data.filter((book) =>
      converteddata.includes(book.bookId)
    );
    setMyWishList(filteredBooks);
  }, [data]);

  return (
    
    <div className="m-6">
    

      <div className="tabs tabs-lift">
        {/* READ LIST TAB (radio input kept for visual parity with DaisyUI) */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read Books"
          checked={activeTab === "read"}
          onChange={() => setActiveTab("read")}
        />
        {/* Only render Read content when activeTab === 'read' */}
        {activeTab === "read" && (
          <div className="tab-content flex flex-col gap-2 bg-base-100 border-base-300 p-6">
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
              {myreadlist.length > 0 ? (
                myreadlist.map((book) => (
                  <div key={book.bookId} className="max-w-[1200px] border-b border-gray-300 mb-2 mx-auto flex flex-col md:flex-row justify-center items-center gap-4 p-4">
                    <div className="flex justify-center items-center p-3 bg-[#f0f1f1] rounded-2xl">
                      <img src={book.image} alt="" className="w-[200px] h-[300px] p-3 rounded-2xl" />
                    </div>

                    <div className="flex flex-col gap-3 w-1/2">
                      <p className="font-bold text-2xl">{book.bookName}</p>
                      <p className="font-semibold text-gray-500 pb-2">By: {book.author}</p>

                      <div className="flex gap-5 w-full pb-4">
                        <div className="flex gap-3">
                          <p className="font-bold">Tags</p>
                          {book.tags.map((tag, index) => (
                            <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-1 justify-center items-center">
                          <img src={map} alt="" className="w-[20px] h-[20px]" />
                          <p className="font-medium text-gray-500">Year of Publishing: {book.yearOfPublishing}</p>
                        </div>
                      </div>

                      <div className="flex gap-3 w-full border-b border-gray-300 pb-3">
                        <div className="text-gray-500 flex gap-2 justify-center items-center">
                          <img src={people} alt="" className="w-[20px] h-[20px]" />
                          <span className="font-bold text-black">{book.publisher}</span>
                        </div>
                        <div className="text-gray-500 flex gap-2 justify-center items-center">
                          <img src={page} alt="" className="w-[20px] h-[20px]" />
                          <span className="font-bold text-black">{book.totalPages}</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button className="text-[#328EFF] p-3 bg-[#d3e3f8] rounded-2xl">Category: {book.category}</button>
                        <button className="text-[#FFAC33] p-3 bg-[#f9e2c1] rounded-2xl">Rating: {book.rating}</button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No books in your read list.</p>
              )}
            </Suspense>
          </div>
        )}

        {/* WISHLIST TAB */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wishlist Books"
          checked={activeTab === "wishlist"}
          onChange={() => setActiveTab("wishlist")}
        />
        {/* Only render Wishlist content when activeTab === 'wishlist' */}
        {activeTab === "wishlist" && (
          <div className="tab-content flex flex-col gap-2 bg-base-100 border-base-300 p-6">
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
              {mywishlist.length > 0 ? (
                mywishlist.map((book) => (
                  <div key={book.bookId} className="max-w-[1200px] border-b border-gray-300 mb-2 mx-auto flex flex-col md:flex-row justify-center items-center gap-4 p-4">
                    <div className="flex justify-center items-center p-3 bg-[#f0f1f1] rounded-2xl">
                      <img src={book.image} alt="" className="w-[200px] h-[300px] p-3 rounded-2xl" />
                    </div>

                    <div className="flex flex-col gap-3 w-1/2">
                      <p className="font-bold text-2xl">{book.bookName}</p>
                      <p className="font-semibold text-gray-500 pb-2">By: {book.author}</p>

                      <div className="flex gap-5 w-full pb-4">
                        <div className="flex gap-3">
                          <p className="font-bold">Tags</p>
                          {book.tags.map((tag, index) => (
                            <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-1 justify-center items-center">
                          <img src={map} alt="" className="w-[20px] h-[20px]" />
                          <p className="font-medium text-gray-500">Year of Publishing: {book.yearOfPublishing}</p>
                        </div>
                      </div>

                      <div className="flex gap-3 w-full border-b border-gray-300 pb-3">
                        <div className="text-gray-500 flex gap-2 justify-center items-center">
                          <img src={people} alt="" className="w-[20px] h-[20px]" />
                          <span className="font-bold text-black">{book.publisher}</span>
                        </div>
                        <div className="text-gray-500 flex gap-2 justify-center items-center">
                          <img src={page} alt="" className="w-[20px] h-[20px]" />
                          <span className="font-bold text-black">{book.totalPages}</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button className="text-[#328EFF] p-3 bg-[#d3e3f8] rounded-2xl">Category: {book.category}</button>
                        <button className="text-[#FFAC33] p-3 bg-[#f9e2c1] rounded-2xl">Rating: {book.rating}</button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">No books in your wishlist.</p>
              )}
            </Suspense>
          </div>
        )}
      </div>
    </div>
  );
}
