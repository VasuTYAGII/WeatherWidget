import { useState } from "react";
import SerachBox from "./SearchBox";
import InfoBox from "./infoBox";
export default function WeatherApp(){
    let[weatherinfo , setWeatherinfo]=useState({
        city:'',
        temp:'',
        temp_max:'',
        temp_min:'',
        humidity:'',
        weather:"",
        fells_like:'',
        grnd_level:'',
        sea_level:'',
        pressure:'',
    })
    let updateInfo=(newinfo)=>{
        setWeatherinfo(newinfo);
    }
    return(
        <div>
         <div className="searchbox">
      <SerachBox updateInfo={updateInfo}/>
      </div>
      <div className="infobox" >
       <InfoBox info={weatherinfo}/>
      </div>
        </div>
    )
}