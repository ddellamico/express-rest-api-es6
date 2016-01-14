'use strict';

import mongoose from 'mongoose';
import User from '../user/user.model.js';

/**
 * Image Schema
 */
const ImageSchema = new mongoose.Schema({
    fileName: {
        type: String
    },
    url: {
        type: String,
        trim: true,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }
});

export default mongoose.model('Image', ImageSchema);
