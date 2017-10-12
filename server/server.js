import express from 'express';
import body_parser from 'body-parser';
import bodyParser from 'body-parser';
import routes from './lib/routes/routes';
import logger from 'morgan';
import config from 'config';
import cors from 'cors'
import Mongoose from 'mongoose';
import helmet from 'helmet';

Mongoose.Promise = global.Promise;
Mongoose.connect(config.db_url,{useMongoClient: true});

const app = express(),
      port = process.env.PORT || config.app.port;

app.use(cors());
app.use(logger('dev'));
app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));
app.use(helmet());


app.get("/", (req, res) => res.json({message: "Api Hotels Almundo"}));

// Mount API routes
routes(app);

app.listen(port, () => {
    console.log("Server listening on port:" +port);
});

export default app;
