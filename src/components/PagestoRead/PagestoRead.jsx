import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { getstoredbookwish } from "../../utility/wishlistDb";

// Function to create the triangle bar shape
const getPath = (x, y, width, height) => (
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
);

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function PagestoRead() {
  const data = useLoaderData();
  const [mywishlist, setMyWishList] = useState([]);

  useEffect(() => {
    if (!data || !Array.isArray(data)) return;
    const storeddata = getstoredbookwish() || [];
    const converteddata = storeddata.map((id) => parseInt(id, 10));
    const filteredBooks = data.filter((book) =>
      converteddata.includes(book.bookId)
    );
    setMyWishList(filteredBooks);
  }, [data]);

  // Convert wishlist to chart data
  const chartData = mywishlist.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Books in Wishlist</h2>

      {mywishlist.length > 0 ? (
        <>
         
          <div className="w-full h-80 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
              >
                
                <XAxis dataKey="name" angle={0} textAnchor="end" interval={0} />
                <YAxis dataKey="pages" />
                <Tooltip />
                <Bar
                  dataKey="pages"
                  fill="#8884d8"
                  shape={<TriangleBar />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

         
        </>
      ) : (
        <p>No books in wishlist yet.</p>
      )}
    </div>
  );
}
