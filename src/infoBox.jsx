import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './infobox.css';


export default function InfoBox({info}){
    let rain_url="https://images.unsplash.com/photo-1518803194621-27188ba362c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHJhaW58ZW58MHx8MHx8fDA%3D";
    let sun_url="https://images.unsplash.com/photo-1534629938736-b1b076531d3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3Vubnl8ZW58MHx8MHx8fDA%3D";
    let cold_url="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
       
       return( <div>
            <div className="infobox">
            <Card sx={{ maxWidth: 345 }}>
              <h2>{info.city}</h2>
            <h3>Weather : {info.weather}</h3>
      <CardMedia
        sx={{ height: 140 , width: 400}}
        image={info.humidity>=80?rain_url:(info.temp<15?cold_url:sun_url)}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div><h4>Temprature : {info.temp}</h4></div>
          <div><h4>Max-Temprature : {info.temp_max}</h4></div>
          <div><h4>Min-Temprature : {info.temp_min}</h4></div>
          <div><h4>Humidity : {info.humidity}</h4></div>
          <div><h4>Feels Like : {info.feels_like}</h4></div>
          <div><h4>Pressure : {info.pressure}</h4></div>
          <div><h4>Ground Level : {info.grnd_level}</h4></div>
          <div><h4>Sea Level : {info.sea_level}</h4></div>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
       )
}