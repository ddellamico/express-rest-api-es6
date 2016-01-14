'use strict';

import image from './image.controller';
import authentication from '../authentication/authentication.controller';

/**
 * Set image routes.
 *
 * @param {Object} app The express application
 */
export default function (app) {
    app.route('/images')
        .post(authentication.isAuthenticated, image.create)
        .get(authentication.isAuthenticated, image.findByUser);

    app.route('/images/:id').delete(authentication.isAuthenticated, image.deleteImage);
}
