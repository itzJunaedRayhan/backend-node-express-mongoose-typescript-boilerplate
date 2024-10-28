import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import routes from './app/routes';

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//  Testing routes:
app.get('/', (req: Request, res: Response) => {
    res.send('Working Successfully...');
});

//  Application Routes:
app.use('/api/v1/', routes);

//  Global Error Handler:
app.use(globalErrorHandler);

//  Handle Not Found:
app.use((req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: 'Not Found',
        errorMessages: [
            {
                path: req.originalUrl,
                message: 'Api Not Found',
            },
        ],
    });
});

export default app;
