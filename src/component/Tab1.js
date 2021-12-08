import React from 'react';

function Tab1({data}) {

    const sunrise = new Date(data.sys.sunrise * 1000);

    const sunset = new Date(data.sys.sunset * 1000);
    return (
        <div className="day">
            {/*<div className="day-of-week">Wed</div>*/}
            {/*<div className="date">8</div>*/}

            <div className="bar cloudy">
                <div className="weather">
                    {/*<svg role="img">*/}
                    {/*    <use xlink:href="#cloudy" width="264" height="166" viewBox="0 0 264 166"></use>*/}
                    {/*</svg>*/}
                </div>
                <div className="temperature vertical">
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