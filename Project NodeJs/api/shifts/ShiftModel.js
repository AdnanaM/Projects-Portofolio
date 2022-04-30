var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ShiftSchema = new Schema({
    start: String,
    end: String,
    per_hour: Number,
    place: String,
    created: Date,
    update: Date,
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "project_users",
    },
    comments: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "project_comments",
        }
    ],
});


module.exports = mongoose.model("project_shifts", ShiftSchema);