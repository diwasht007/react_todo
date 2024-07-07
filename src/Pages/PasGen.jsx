import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LC, NC, SC, UC } from '../Data/Char';

export default function PasGen() {
    let [uppercase, setUppercase] = useState(false)
    let [lowerCase, setLowercase] = useState(false)
    let [number, setNumber] = useState(false)
    let [symbol, setSymbol] = useState(false)
    let [passwordlen, setPasswordlen] = useState(10)
    let [fpass, setFpass] = useState('')
    let [bcolor, setBcolor] = useState(false)

    let createPassword = ()=>{
        let charSet=''
        let finalPass=''
        if(uppercase || lowerCase || number || symbol){
            if(uppercase) charSet+=UC
            if(lowerCase) charSet+=LC
            if(number) charSet+=NC
            if(symbol) charSet+=SC
            for(let i=0;i<passwordlen;i++){
                finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))

            }
            setFpass(finalPass)


        }

        
    else{
        alert("Please select atleast one CheckBox..!")
    }
    }
    let copyPass=()=>{
        navigator.clipboard.writeText(fpass)
    }
    return (
        <>
            <Link to={'/'}>Home</Link>
            <div className='passwordBox'>
                <div className='pbox'>
                    <h3>Password Generator</h3>
                    <div className='pasboxin'>
                        <input type='text' readOnly value={fpass}/><button className='btn btn-warning me-2' onClick={copyPass}>Copy</button>
                    </div>
                    <div className='passlength'>
                        <label>Password Length</label>
                        <input type='number' max={20} min={10} value={passwordlen} onChange={(event)=>{setPasswordlen(event.target.value)}}/>
                    </div>
                    <div className='passlength'>
                        <label>Including UpperCase</label>
                        <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
                    </div>
                    <div className='passlength'>
                        <label>Including LowerCase</label>
                        <input type='checkbox' checked={lowerCase} onChange={()=>setLowercase(!lowerCase)}/>
                    </div>
                    <div className='passlength'>
                        <label>Including Number</label>
                        <input type='checkbox' checked={number} onChange={()=>setNumber(!number)}/>
                    </div>
                    <div className='passlength'>
                        <label>Including Symbol</label>
                        <input type='checkbox' checked={symbol} onChange={()=>setSymbol(!symbol)}/>
                    </div>
                    <button onClick={createPassword} className='gbutton'>Generate Password</button>

                </div>

            </div>
        </>
    )
}
