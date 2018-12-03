import express from 'express';
import dbConfig from './config/db';
import middlewaresCongig from './config/middleware';
import { MeetupRoutes } from './modules';


const app = express();

// db connection
dbConfig();

//middleware
middlewaresCongig(app);



//from modules  routes handler
app.use('/api', [MeetupRoutes]);



const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    if (err) {
        console.error(err);
    } {
        console.log(`Server started in the port - ${PORT}`);
    }
})