import {config} from '../config/env.js'

async function fetchWeatherData(city: string) : Promise<any> {
    
    const url = `${config.weatherApiUrl}/${encodeURIComponent(city)}?/unitGroup=metric&key=${config.weatherApiKey}&contentType=json`;

    const response = await fetch(url);

    if(!response.ok) {
        throw new Error('Failed to fetch weather data');
    }


    const data = await response.json();

    return data;
}

export default fetchWeatherData;