import React, {useState} from 'react';

function Tab1({data}) {
    const sunrise = new Date(data.sys.sunrise * 1000);

    const sunset = new Date(data.sys.sunset * 1000);
    return (
        <div className="day">
            <div className="bar cloudy">
                <div className="weather">
                </div>
                <div className="temperature">
                    {data.name}
                </div>
                <div className="content">
                    <div className="precipitation">
                        {data.sys.country}
                    </div>
                    <div className="low">
                        <p>Coordination:</p>
                        <p>{data.coord.lon}</p>
                        <p>{data.coord.lat}</p>
                    </div>
                    <div className="low">
                        <p>SUN</p>
                        <p>{sunrise.toLocaleString('PL', {})}</p>
                        <p>{sunset.toLocaleString('PL', {})}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tab1;