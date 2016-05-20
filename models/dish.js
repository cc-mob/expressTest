var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DishSchema = new Schema({

    id:{
        type : Number,
        unique : true
    },
    name:{
        type : String
    },
    image:{
        type : String,
        default: 'images/uthapizza.png'
    },
    category:{
        type : String
    },
    label:{
        type : String
    },
    price:{
        type : Number
    },
    description:{
        type : String
    },
    comments:[{
            rating:{
                type : Number
            },
            comment:{
                type : String
            },
            author:{
                type : String
            },
            date:{
                type : Date
            }
    }]

});

module.exports = mongoose.model('Dish', DishSchema);
