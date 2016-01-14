'use strict';

import logger from '../utils/logger';
import User from './user.model';
import wrap from 'co-express';

/**
 * Find an user by id.
 *
 * @param {Object} req The request object
 * @param {Object} res The response object
 * @returns {Object} the user corresponding to the specified id
 * @api public
 */
const findById = wrap(function* (req, res) {

    try {
        const user = yield User.findById(req.params.id, 'firstName lastName email avatar');
        res.json(user);
    } catch (err) {
        logger.error(err.message);
        return res.status(400).send(err.message);
    }
});

/**
 * List of users.
 *
 * @param {Object} req The request object
 * @param {Object} res The request object
 * @returns {Array} the list of users
 * @api public
 */
const findAll = wrap(function* (req, res) {

    try {
        const users = yield User.find();
        res.json(users);
    } catch (err) {
        logger.error(err.message);
        res.status(400).send(err.message);
    }
});

export default {
    findById,
    findAll
};
