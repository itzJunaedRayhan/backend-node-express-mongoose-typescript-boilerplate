import mongoose from 'mongoose';
import config from './config';
import app from './app';
import { Server } from 'http';

let server: Server;
//  Handle  - Uncaught exceptions:
process.on('uncaughtException', error => {
    console.log(error);
    process.exit(1);
});

const bootstrap = async (): Promise<void> => {
    try {
        await mongoose.connect(config.database_url as string);
        console.log('Database connected Successfully...');

        app.listen(config.port, () => {
            console.log(`Database listening on ${config.port}`);
        });
    } catch (error) {
        console.log('There was an error connecting to database', error);
    }

    //  Handle - unhandle Rejection:
    process.on('unhandledRejection', error => {
        if (server) {
            server.close(() => {
                console.log(error);
                process.exit(1);
            });
        } else {
            process.exit(1);
        }
    });
};

bootstrap();

//  Close Server if SIGNAL is Terminated:
process.on('SIGTERM', () => {
    console.log('SIGTERM is received');
    if (server) server.close();
});
