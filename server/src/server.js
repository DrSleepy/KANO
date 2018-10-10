import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';

import * as config from './config';
import contact from './routers/contact';

const server = express();

// middleware
server.use(helmet());
server.use(compression());
server.use(logger('dev'));
server.use(cors({ origin: 'http://localhost:8080', credentials: true }));
server.use(bodyParser.json());
server.use(cookieParser());

// routes
server.use('/contact', contact);

// error handling
server.use((err, req, res, next) => res.status(err.status).json(err)); // eslint-disable-line

server.listen(config.PORT, () => console.log(`Server has started on port ${config.PORT}`));
