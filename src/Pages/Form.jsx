 import React, { useState } from 'react'
import Header from '../Common/Header'
 
 export default function Form() {
    let [uname,setUname] =useState('')
    let [password,setPassword] =useState('')
    let handelSubmit=(event)=>{
        event.preventDefault()
        console.log(uname,password)

    }

   return (
     <>
     <Header/>
     <div className='container'>
        <di className='row'>
            <div className='col-lg-6'>
                <form onSubmit={handelSubmit}>
                    <div className='text-start my-3'>
                        <label>UserName</label>
                        <input type='text' onChange={(event)=>setUname(event.target.value)} className='form-contrl' value={uname}/>
                    </div>
                    <div className='text-start my-3'>
                        <label>Password</label>
                        <input type='password'onChange={(event)=>setPassword(event.target.value)} className='form-contrl' value={password}/>
                    </div>
                    <div  className='text-start my-3'>
                        <button>Login</button>
                    </div>
                </form>

            </div>
        </di>

     </div>


     </>
   )
 }
 