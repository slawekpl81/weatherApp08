import React from 'react';
import arrow from '../img/direction.png';

function Tab4({data}) {
    const wind_direction = data.wind.deg;
    return (
        <div className="day">

            <div className="bar snowy">
                <div className="weather">

                </div>
                <div className="temperature">
                    <img src={arrow} alt="direction"
                         style={{transform: `rotate(${wind_direction}deg)`}}
                    />
                </div>
                <div className="content">
                    <div className="precipitation">

                        {data.wind.speed}m/s
                    </div>
                    <div className="low">


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tab4;