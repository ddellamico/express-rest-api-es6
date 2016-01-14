'use strict';

const config = Object.freeze({

    environment: process.env.NODE_ENV || 'development',

    // Upload files in memory
    uploadFilesInMemory: process.env.UPLOAD_FILES_IN_MEMORY || false,

    // Populate the DB with sample data
    seedDB: true,

    // Token settings
    token: {
        secret: process.env.TOKEN_SECRET || 'pet-finder',
        expiration: process.env.TOKEN_EXPIRATION || 60 * 60 * 24 //24 hours
    },

    // Server settings
    server: {
        host: '0.0.0.0',
        port: process.env.NODE_PORT || process.env.PORT || 3000
    },

    // MongoDB settings
    mongodb: {
        dbURI: 'mongodb://' + (process.env.PETFINDER_DB_1_PORT_27017_TCP_ADDR || 'localhost') + ':27017/pet-finder',
        dbOptions: {'user': '', 'pass': ''}
    },

    redis: {
        isAvailable: process.env.IS_REDIS_AVAILABLE || false,
        host: process.env.REDIS_HOST || '127.0.0.1',
        port: process.env.REDIS_PORT || 6379,
        auth: process.env.REDIS_AUTH || '',
        options: {}
    }
});

export default config;
