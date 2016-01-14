'use strict';

import mongoose from 'mongoose';
import passport from 'passport';
import logger from '../utils/logger';
import User from '../user/user.model';
import local from './passport/local';

class Passport {

    constructor() {
    }

    init(app) {

        // use these strategies
        passport.use(local);

        // Add passport's middleware
        app.use(passport.initialize());
    }
}

export default new Passport();
