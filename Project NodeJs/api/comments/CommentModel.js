var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommentSchema = new Schema({
    description:{
        type:String,
        minlength:[5,'Description is minimum 20 characters'],
        maxlength:[1000,'Description is maximum 1000 characters']   
    },
    created: Date,
    updated: Date,
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "project_users"
    },
    shift: {
        type:mongoose.Schema.ObjectId,
        ref:'project_shifts',
    }
});

CommentSchema.pre(/^find/, async function(next){
    this.populate({
        path:'userId',
        select:'_id email'   
    }).populate({
        path:'shift',
        select:'_id place comments'   
    })
    next();
});


module.exports = mongoose.model('project_comments', CommentSchema);