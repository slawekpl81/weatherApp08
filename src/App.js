import './styles.css';
import env from "react-dotenv";
import {useEffect, useState} from "react";
import Tab1 from "./component/Tab1";
import Tab2 from "./component/Tab2";
import Tab3 from "./component/Tab3";


function App() {
    const [response, setResponse] = useState(null);
    const [icon, setIcon] = useState('');

    useEffect(() => {
        const key = env.API_KEY;
        const city = env.CITY;
        // const URL = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=${key}`
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`

        async function get_weather() {
            console.log(URL)
            fetch(URL)
                .then(res => res.json())
                .then(data => setResponse(data))
                .catch(error => console.error(error))
        }

        get_weather();

    }, [])
    useEffect(() => {
        if (response) {
        const weatherIcon = response.weather[0].icon;
        const ICON_URL = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
        setIcon(ICON_URL);
        }
    }, [response])

    return (
        <div className="wrapper">
            {console.log(response)}
            {/*<img src={icon} alt="icon"/>*/}
            {response && (
                <>
                    <Tab1 data={response}/>
                    <Tab2 data={response}/>
                    <Tab3 data={response} icon={icon}/>
                </>
            )}

        </div>
    );
}

export default App;
