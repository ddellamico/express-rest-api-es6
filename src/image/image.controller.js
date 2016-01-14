'use strict';

import path from 'path';
import logger from '../utils/logger';
import Image  from './image.model';
import wrap from 'co-express';

/**
 * Find list of images by user id.
 *
 * @param {Object} req The request object
 * @param {Object} res The response object
 * @returns {Array} the list of images corresponding to the specified user id
 * @api public
 */
const findByUser = wrap(function* (req, res) {

    const images = yield Image.find({user: req.query.userId});

    try {
        res.json(images);
    } catch (err) {
        logger.error(err.message);
        res.status(400).send(err.message);
    }

});

/**
 * Create image.
 *
 * @param {Object} req The request object
 * @param {Object} res The response object
 * @returns {Object} the new created image
 * @api public
 */
const create = wrap(function* (req, res) {
    let image = new Image();

    image.fileName = req.files.image.name;
    image.url = path.join(req.body.url, req.files.image.path);
    image.user = req.body.userId;

    try {
        yield image.save();
        res.status(201).json(image);
    } catch (err) {
        logger.error(err.message);
        res.status(400).send(err);
    }
});

/**
 * Delete image.
 *
 * @param {Object} req The request object
 * @param {Object} res The request object
 * @api public
 */
const deleteImage = (req, res) => {
    Image.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            logger.error(err.message);
            return res.status(500).send(err);
        } else {
            res.sendStatus(204);
        }
    });
};

export default {
    findByUser,
    create,
    deleteImage
};
