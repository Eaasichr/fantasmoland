var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var skeletonSchema = new Schema({
    place: String,
    month: String,
    year: Number,
    dish: String,
    guests: String,
    missing: String,
    dessert: String
});

var SkeletonModel = mongoose.model("Skeleton", skeletonSchema);

module.exports = SkeletonModel;