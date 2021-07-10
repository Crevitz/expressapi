const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: true
    },
    description:{
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
       },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})

articleSchema.virtual('url').get(function(){
    return '/post/' + this._id
 })

 module.exports = mongoose.model("article", articleSchema)