import React, { useState } from 'react';
import './weather.css'
import axios from 'axios'
const WeatherApi = () => {
    let  [name,setName]=useState('')
    let [matter,setMatter]=useState({})
    const handleInput=(e)=>
    {
         
        setName(name=e.target.value)
        
    }
    const handleButton=()=>
    {
       
          const url='http://api.weatherapi.com/v1/current.json?key=043765327fcd4fb6992155411230703&q='+name+'&aqi=no'
          axios.get(url).
          then((response)=>{setMatter(matter=response.data)
           console.log(matter)}).
          catch((e)=>console.log(e))
    }

    return (
        <div>
            
             <h1 className='heading'>WEATHER REPORT</h1>
             <div className='box'>
             <input type="text" placeholder='enter location' onChange={handleInput}></input>
             <button className='enter' onClick={handleButton} >enter</button>
             </div><br></br>
             {
                <table border={5}>
                <tbody>
                    <tr>
                         <td>Country:{matter.location.country}</td>
                         <td>Name:{matter.location.name}</td>

                    </tr>
                    <tr>
                         <td>Region:{matter.location.region}</td>
                         <td>Time Zone Id:{matter.location.tz_id}</td>

                    </tr>
                    <tr>
                         <td>Latitude:{matter.location.lat}</td>
                         <td>Longitude:{matter.location.lon}</td>

                    </tr>
                    <tr>
                         <td>Local time:{matter.location.localtime}</td>
                         <td>Local time epoch:{matter.location.localtime_epoch}</td>

                    </tr>

               </tbody> </table>
             }
        </div>
    );
};

export default WeatherApi;