import express from "express";
import rateLimit from "express-rate-limit";
import router from "./routes/weatherRoutes.js";


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100, 
    standardHeaders: true, 
    legacyHeaders: false, 
    message: "Too many requests from this IP, please try again after 15 minutes"
})

app.use(limiter);

app.use(router);

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});

