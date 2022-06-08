const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName :{
        type :String,
        require :true
    },
    price :{
        indianPrice :String,
        europeanprice :String
    },
    year : {
        type :Number,
        default:2021
    },
    tags : [String],
    authorName : String,
    totalPages : Number,
    stokeAvailable :Boolean
},
{timestamps :true})
//     bookName: String, 
//     authorName: String, 
//     tags: [String],
    
//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10}
// }, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
