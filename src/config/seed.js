'use strict';

import logger from '../utils/logger';
import mongoose from 'mongoose';
import User from '../user/user.model';
import Image from '../image/image.model';

const testUserId = mongoose.Types.ObjectId('5692820f7822e79322d671e1');

User.find({}).remove(() => {
    User.create({
            _id: testUserId,
            provider: 'local',
            firstName: 'Damien',
            lastName: 'Damien Dell\'Amico',
            email: 'damien.dellamico@gmail.com',
            password: 'test',
            roles: ['user', 'admin'],
            avatar: ''
        }, {
            provider: 'local',
            firstName: 'user1',
            lastName: 'lastname1',
            email: 'user1@gmail.com',
            password: 'test'
        }, () => {
            logger.info('Finished populating users');
        }
    );
});

Image.find({}).remove(function () {
    Image.create({
        fileName: 'image 1',
        url: '',
        user: testUserId
    }, {
        fileName: 'image 2',
        url: '',
        user: testUserId
    }, {
        fileName: 'image 3',
        url: '',
        user: testUserId
    }, () => {
        logger.info('Finished populating images');
    });
});
