import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"


import Course from './Pages/Course';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';

import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import BlogDetails from './Pages/BlogDetails';
import Error404 from './Pages/Error404';
import Form from './Pages/Form';
import FormHandel from './Pages/FormHandel';
import PasGen from './Pages/PasGen';
import WeatherCast from './Pages/WeatherCast';





const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>
  },
  {
    path: "about-us",
    element: <About/>
  },
  {
    path: "course",
    element: <Course/>
  },
  {
    path: "blog",
    element: <Blog/>
  },
  {
    path: 'blog/:id',
    element:<BlogDetails/>
  },
  {
    path: 'form',
    element:<Form/>

  },
  {
    path:'formhandel',
    element:<FormHandel/>

  },
  {
    path: 'pasgen',
    element:<PasGen/>

  },
  {
    path: 'weather',
    element: <WeatherCast/>

  },
  {
    path: '*',
    element: <Error404/>
  }
])
root.render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
