import mongoose from 'mongoose';

let searchHistorySchema = mongoose.Schema({
    timestamp: Number,
    query: String
});
searchHistorySchema.index({ timestamp: 1});

export let SearchHistory = mongoose.model('SearchHistory', searchHistorySchema);