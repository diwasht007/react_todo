import React from 'react'
import Header from '../Common/Header'
import { useLocation } from 'react-router-dom'
import { blog } from '../Data/Blog';

export default function BlogDetails() {
    let uselocation=useLocation();
    let currentId = uselocation.pathname.split('/')[2]
    let currentData = blog.filter((v)=>v.id==currentId)[0]
    console.log(currentData)


  return (
    <div><Header/>
    <h1>{currentData.title}</h1>
    <p>
        {currentData.body}
    </p>

    
    </div>
  )
}
