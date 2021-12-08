import React from 'react';

function Tab2({data}) {
    return (
        <div className="day">
            {/*<div className="day-of-week">Thur</div>*/}
            {/*<div className="date">9</div>*/}

            <div className="bar sunny">
                <div className="weather">
                    {/*<svg role="img" width="208" height="213" viewBox="0 0 208 213">*/}
                    {/*    <use xlink:href="#sunny"></use>*/}
                    {/*</svg>*/}
                </div>
                <div className="temperature vertical">
                    {data.main.temp}<span className="degrees">&deg;C</span>
                </div>
                <div className="content">
                    <div className="precipitation">
                        <p>feels like:</p>
                        <p>{data.main.feels_like}<span>&deg;C</span></p>
                    </div>
                    <div className="low">
                        <p>pressure:</p>
                        <p>{data.main.pressure}hPa</p>
                    </div>
                    <div className="low">
                        <p>humidity:</p>
                        <p>{data.main.humidity}%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tab2;