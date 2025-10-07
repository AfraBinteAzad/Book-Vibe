import React from 'react';
import { createBrowserRouter} from "react-router";
import Root from '../components/pages/Root/Root';
import ErrorPage from '../components/pages/ErrorPage/ErrorPage';
import Home from '../components/pages/Home/Home';
import BookDetails from '../components/BookDetails/BookDetails';
import ReadList from '../components/ListedBooks/ListedBooks';
import ListedBooks from '../components/ListedBooks/ListedBooks';
import PagestoRead from '../components/PagestoRead/PagestoRead';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            loader:()=>fetch('booksData.json'),
            path:"/",
            Component:Home,
        },
       
        {
         path:"/listedbooks",
         loader:()=>fetch('booksData.json'),
         Component:ListedBooks,

        },
        {
         path:"/pagestoread",
         loader:()=>fetch('booksData.json'),
         Component:PagestoRead,

        },
        {
          path:"/bookDetails/:id",
          loader:()=>fetch('/booksData.json'),
          Component: BookDetails,
        }
    ]
  },
]);