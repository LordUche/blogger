import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import router from './routes';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router(app);
app.listen(3000, () => console.log('App started on port', 3000));
