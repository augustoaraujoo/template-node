import'reflect-metadata';
import express from 'express'
import 'express-async-errors'
import { router } from './routes/index';
import '@shared/container'

console.log(`hello dsa thanks for using my cli`)

const app = express();

app.use(express.json());
app.use(router);
app.listen(3030)