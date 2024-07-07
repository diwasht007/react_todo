import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { APIKey } from '../Data/key';

function App() {
    let [city, setCity] = useState('')
    let [wDetails, setWdetails] = useState()
    let [isLoading,setIsLoading] = useState(false)
    let [counter, setCounter] = useState(1)
    let getData = (event)=>{
        setIsLoading(true)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`)
        .then((res)=>res.json())
        .then((finalRes)=>{
            console.log(finalRes)
            if(finalRes.cod == "404" ){
                setWdetails(undefined)
            }
            else{
                setWdetails(finalRes)
            }
            setIsLoading(false)
        })
        event.preventDefault()
        setCity('')
      
    }
    let changeCounter = ()=>{
        setCounter(counter+1)
    }
    useEffect(()=>{
        console.log("welcome to WS")
    },[counter])
    return (
        <div className='container-fluid bg-primary vh-100 text-white'>
            {counter}
            <button onClick={changeCounter}>Counter</button>
            <div className='container'>
                <h1 className='text-center py-5'>Simple Weather App</h1>
                <form className='row justify-content-center mb-5' onSubmit={getData}>
                    <div className='col-8'>
                        <input
                            type='text'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className='form-control'
                            placeholder='Enter city name'
                        />
                    </div>
                    <div className='col-2'>
                        <button type='submit' className='btn btn-warning w-100'>
                            Submit
                        </button>
                    </div>
                </form>
                <div className='card mx-auto relative' style={{ maxWidth: '400px' }}>
                    {
                    isLoading 
                    ? 
                    <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2h5bm9tdWx4NncwazVlcDY3Y28zcHdpZHFhM256M29rZXV3ODhreCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI6SIIHBdRxXI40/giphy.gif"/>
                    :
                    ''
                    }
                

                    <div className='card-body'>
                        
                        {wDetails!==undefined
                        ?
                        <>
                            <h3 className='card-title'>{wDetails.name} <span>{wDetails.sys.country}</span></h3>
                            <h4 className='card-text'>{wDetails.main.temp}°C</h4>
                            <img
                                src={`https://openweathermap.org/img/w/${wDetails.weather[0].icon}.png`}
                            />
                            <p className='card-text'>{wDetails.weather[0].description}</p>
                        
                        </>
                        :
                        'No Data Found'
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
