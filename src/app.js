// const   MongoClient     = require('mongodb').MongoClient,
//         ObjectId        = require('mongodb').ObjectID,
//         path            = require('path');
import express from 'express';
import mongoose from 'mongoose';
import MongoClient from 'mongodb';
// routes
import { searchApi } from './api/search';

const mongodb = 'mongodb://oskar:test123@ds143907.mlab.com:43907/image-search';
mongooseInit(mongodb);

export const app = express();
app.use('/api', searchApi);

function mongooseInit(mongodb) {
    mongoose.Promise = global.Promise;
    mongoose.connect(mongodb, { useMongoClient: true });
}
