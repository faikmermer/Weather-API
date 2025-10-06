import dotenv from "dotenv";

dotenv.config();

export const config = {
    port : process.env.PORT || 3000,
    weatherApiUrl : process.env.WEATHER_API_URL!,
    weatherApiKey : process.env.WEATHER_API_KEY!,
    redisUrl : process.env.REDIS_URL!,
    cacheExpireSeconds : process.env.CACHE_EXPIRE_SECONDS!
}