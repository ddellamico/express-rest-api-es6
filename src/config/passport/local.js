'use strict';

import mongoose from 'mongoose';
import passportLocal from 'passport-local';
import User from '../../user/user.model';

const LocalStrategy = passportLocal.Strategy;

export default new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},  (email, password, done) => {

    User.findOne({email: email.toLowerCase()}, function (err, user) {

        if (err) {
            return done(err);
        }

        // no user found with that email
        if (!user) {
            return done(null, false, {message: 'The email is not registered.'});
        }
        if (!user || !user.authenticate(password)) {
            return done(null, false, {
                message: 'Invalid username or password'
            });
        }

        return done(null, user);
    });
});
