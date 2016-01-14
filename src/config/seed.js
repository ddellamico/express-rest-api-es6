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
            avatar: 'http://orig02.deviantart.net/ec99/f/2010/345/0/5/cat_avatar_by_katkooota-d34p5iz.jpg'
        }, {
            provider: 'local',
            firstName: 'Erika',
            lastName: 'Scola',
            email: 'erika.scola@gmail.com',
            password: 'test'
        }, () => {
            logger.info('Finished populating users');
        }
    );
});

Image.find({}).remove(function () {
    Image.create({
        fileName: 'Cat 1',
        url: 'http://images.sodahead.com/profiles/0/0/2/3/1/3/1/8/7/Me-as-cat-40837791094.jpeg',
        user: testUserId
    }, {
        fileName: 'Cat 2',
        url: 'https://www.petfinder.com/wp-content/uploads/2012/11/99233806-bringing-home-new-cat-632x475.jpg',
        user: testUserId
    }, {
        fileName: 'Cat 3',
        url: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Turkish_Van_Cat.jpg',
        user: testUserId
    }, () => {
        logger.info('Finished populating images');
    });
});
