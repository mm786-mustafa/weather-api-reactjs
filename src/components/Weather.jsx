import React from "react";

function Weather(props) {
    return (
        <section className="weather-part">
            <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="Weather Icon" />
            <div className="temp">  
                <span className="numb">{props.temp}</span>
                <span className="deg">°</span>C
            </div>
            <div className="weather">{props.description}</div>
            <div className="location">
                <i className='bx bx-map'></i>
                <span>{props.name}</span>
            </div>
            <div className="bottom-details">
                <div className="column feels">
                    <i class="fa-solid fa-temperature-quarter"></i>
                    <div className="details">
                        <div className="temp">
                            <span className="numb-2">{props.feels_like}</span>
                            <span className="deg">°</span>C
                        </div>
                        <p>Feels like</p>
                    </div>
                </div>
                <div className="column humidity">
                    <i class="fa-solid fa-droplet"></i>
                    <div className="details">
                        <span>{props.humidity}</span>
                        <p>Humidity</p>
                    </div>
                </div>
            </div>
      </section>
    );
}

export default Weather;

<div className="wrapper">
    <header><i className='bx bx-left-arrow-alt'></i>Weather App</header>
</div>