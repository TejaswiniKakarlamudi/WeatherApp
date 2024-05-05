import { Typography } from "@mui/material";

const Card = ({ data }) => {
  const {
    location,
    current: {
      condition,
      icon,
      temp_c: tempC,
      temp_f: tempF,
      uv,
      wind_degree: windDegree,
      wind_dir: windDirection,
      wind_kph: windKPH,
      wind_mph: windMph,
      last_updated: lastUpdate,
      pressure_in: pressureIN,
      pressure_mb: pressureMB,
      humidity,
      cloud,
      air_quality: airQuality,
      precip_in: precipIN,
      precip_mm: precipMM,
      is_day: isDay,
      vis_km: visKM,
      vis_miles: visM,
      

    },
  } = data;

  const locationStyle = {
    textAlign: 'center',
    textDecoration: 'underline',
    textDecorationThickness: 'thick',
    textDecorationColor: 'white',
    textShadow: '0 0 4px white',
    padding: '2px',
    textUnderlineOffset: '0.3em',
  };

  return (
    <div className="cardmain">
      <div>
        <Typography variant="h6" component="div" sx={locationStyle}>
          {location.name}, {location.country}
        </Typography>
        <Typography variant="p" component="p" sx={locationStyle}>
          Last updated: {lastUpdate}
        </Typography>
        <div className="cardicon">
          <img src={condition.icon} alt="Weather Icon" />
        </div>
      </div>
      <div className="secondpart">
        <div className="weatherCard">
          <h3>Weather in {location.name} is</h3>
          <p>Condition: {condition.text}</p>
          <p>Temperature: {tempC}°C / {tempF}°F</p>
          <p>Wind: {windDegree}° {windDirection} at {windKPH} kph / {windMph} mph</p>
          <p>UV Index: {uv}</p>
          <p>Humidity percentage: {humidity}</p>
          <p>Cloud coverage: {cloud}</p>
          {/* <p>Coordinate: latittude {}</p> */}
        </div>
        <div className="airQuality">
          <h4>Air quality</h4>
          <p> gb-defra-index: {airQuality['gb-defra-index']}</p>
          <p> us-epa-index: {airQuality['us-epa-index']}</p>
          <p> co: {airQuality.co}</p>
          <p> no2: {airQuality.no2}</p>
          <p> o3: {airQuality.o3}</p>
          <p> pm2_5: {airQuality.pm2_5}</p>
          <p> so2: {airQuality.so2}</p>
        </div>
      </div>
      <div className="additionalSection">
        <div className="extra">
          <p>Pressure</p>
          <span>{pressureIN}/{pressureMB}</span>
        </div>
        <div className="extra">
             <p>Coordinates</p>
             <span>lat:{location.lat}°/lon:{location.lon}° </span>
        </div>
        <div className="extra">
          <p>It's</p>
         {isDay===0?(
            <p>Night</p>
          ):(
            <p>Day</p>
          )}
        </div>
        <div className="extra">
        <p>Precepition</p>
          <span>{precipIN}in/{precipMM}mm</span>
        </div>
        
        <div className="extra">
        <p>Visibility</p>
          <span>{visKM}km/{visM}miles</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
