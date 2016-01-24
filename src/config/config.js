'use strict';

import dotenv from 'dotenv';

dotenv.config({silent: process.env.NODE_ENV !== 'development'});

const config = Object.freeze({

    environment: process.env.NODE_ENV || 'development',

    // Populate the DB with sample data
    seedDB: true,

    // Token settings
    token: {
        secret: process.env.TOKEN_SECRET || 'secret',
        expiration: process.env.TOKEN_EXPIRATION || 86400 //24 hours
    },

    // Server settings
    server: {
        host: '0.0.0.0',
        port: process.env.NODE_PORT || process.env.PORT || 3000
    },

    // MongoDB settings
    mongodb: {
        dbURI: `mongodb://${process.env.MONGO_HOST || process.env.EXPRESSRESTAPIES6_MONGO_1_PORT_27017_TCP_ADDR  ||
        'localhost'}:27017/${process.env.MONGO_DB_NAME || 'db-name'}`,

        dbOptions: {'user': '', 'pass': ''}
    },

    redis: {
        isAvailable: process.env.IS_REDIS_AVAILABLE || false,
        host: process.env.APP_REDIS_HOST || process.env.EXPRESSRESTAPIES6_REDIS_1_PORT_6379_TCP_ADDR || '127.0.0.1',
        port: process.env.APP_REDIS_PORT || process.env.EXPRESSRESTAPIES6_REDIS_1_PORT_6379_TCP_PORT || 6379,
        auth: process.env.REDIS_AUTH || '',
        options: {}
    }
});

export default config;
