import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchbox.css';
import { useState } from 'react';

export default function SerachBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);


    const API_URL="http://api.openweathermap.org/data/2.5/weather";
    const API_KEY="96dd8c84c08ad30223b3ba82ef715d07"
 
    let getWeatherInfo=async ()=>{
        try{
        let res=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);     
        let jsonRes=await res.json();
       let result={
        city:jsonRes.name,
         temp:jsonRes.main.temp,
         temp_max:jsonRes.main.temp_max,
         temp_min:jsonRes.main.temp_min,
         humidity:jsonRes.main.humidity,
         weather:jsonRes.weather[0].description,
         feels_like:jsonRes.main.feels_like,
         pressure:jsonRes.main.pressure,
         grnd_level:jsonRes.main.grnd_level,
         sea_level:jsonRes.main.sea_level,
       }
       return result;
     } catch(err){throw(err)};
    }
    

    
    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit=async (event)=>{
        try{
            event.preventDefault();
            setCity("");
            setError(false);
            let newinfo=await getWeatherInfo();
            updateInfo(newinfo);
        } catch(err)
        {
            setError(true);
        }       
    }
        return(
        <div className='search'> 
        <h3>Enter the City</h3>
        <form>
        <TextField id="city" label="city" variant="filled" value={city} onChange={handleChange} required/> <br /> <br />
        <Button variant="contained" type='submit' onClick={handleSubmit}>Get Weather Details</Button>
        {error && <p style={{color:"red"}}>Can't Detect this place</p>}
        </form>
        </div>
    )
}