import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {

    let [city,setCity] = useState("");
    let [err,setErr] = useState(false);

    const API_KEY = 'fbd40a016addc88a2fb8ad950326cee9';
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

    let getWeatherInfo = async () =>{
        try{
            let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonRes = await res.json();
            let result = {
                city : city,
                temp : jsonRes.main.temp,
                tempMin : jsonRes.main.temp_min,
                tempMax : jsonRes.main.temp_max,
                humidity : jsonRes.main.humidity,
                feelsLike : jsonRes.main.feels_like,
                weather : jsonRes.weather[0].description,
            }
            console.log(result);
            
            return result;
        }
        catch(err)
        {
            throw err;
        }
       
    }


    let handleChange = (event) =>{
        setCity(event.target.value);
    };

    let handleSubmit =  async (event)=>{
        try{
            event.preventDefault();
            setCity("");
           let newInfo = await getWeatherInfo();
           updateInfo(newInfo);
        }
        catch(err)
        {
            setErr(true);
        }
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br><br></br>
            <Button variant="contained" type='submit'>Search</Button>
            </form>
            {err && <p>No such place exists</p>}
        </div>
    )
}