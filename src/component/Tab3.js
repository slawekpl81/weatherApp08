import React from 'react';

function Tab3({data, icon}) {
    return (
        <div className="day">


            <div className="bar stormy">
                <div className="weather">
                    {/*<svg role="img" width="246" height="187" viewBox="0 0 246 187">*/}
                    {/*    <use xlink:href="#stormy"></use>*/}
                    {/*</svg>*/}
                </div>
                <div className="temperature">
                    <img src={icon} alt="icon"/>
                </div>
                <div className="content">
                    <div className="precipitation">
                        <p>{data.weather[0].description}</p>
                    </div>
                    {/*<div className="low">*/}
                    {/*    /!*<svg role="img" className="icon">*!/*/}
                    {/*    /!*    <use xlink:href="#low"></use>*!/*/}
                    {/*    /!*</svg>*!/*/}
                    {/*    28&deg;*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>

    );
}

export default Tab3;