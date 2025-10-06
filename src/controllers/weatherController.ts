import  Express  from "express"
import client from "../utils/redisClient.js";
import fetchWeatherData from "../services/weatherService.js";
import { config} from "../config/env.js";

async function getWeather(req: Express.Request, res: Express.Response) : Promise<any> {
  debugger; 
  try{
    
    const city : string = req.params.city as string;

    if(!city) {
        return res.status(400).json({error: "City is required"});
    }

    const data = await client.get(city);

    if(data){
        return res.json(JSON.parse(data));
    }else{
        const data = await fetchWeatherData(city);
        await client.setEx("city", Number(config.cacheExpireSeconds), JSON.stringify(data));
        return res.json(data.days[0]);
    }
  }catch(error){
    console.error(error);
    res.status(500).json({error: "Internal server error"});
  }

}

export default getWeather;