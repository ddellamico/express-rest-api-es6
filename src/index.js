'use strict';

import server from './config/express';
import config from './config/config';
import mongodb from './config/mongoose';
import logger from './utils/logger';
import pkg from  '../package.json';

const banner = `
*********************************************************************************************
*
* ${pkg.description}
* @version ${pkg.version}
* @author ${pkg.author.name}
*
*********************************************************************************************`;

const startServer = () => {

    console.log(banner);

    // Initialize express
    const app = server.init();

    // Start up the server on the port specified in the config after we connected to mongodb
    app.listen(config.server.port, () => {
        console.log(`App started on port ${config.server.port} with environment ${config.environment}`);
    });
};

// Initialize mongoose
mongodb(startServer);
