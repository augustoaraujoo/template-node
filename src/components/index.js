import'reflect-metadata';
import express from 'express'
import 'express-async-errors'
import { router } from './routes/index';
import '@shared/container'

console.log('% = props.name %')

const app = express();

app.use(express.json());
app.use(router);
app.listen(3030)