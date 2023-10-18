
const mongoose = require('mongoose');
// Event Schema
const eventSchema = new mongoose.Schema({
    Name: {
        type : String , 
        required : true
    },
 
    Feadback : {
        type : String , 
        required : true
    }
})

// Create Our Model
const Event = mongoose.model('feadback' , eventSchema);

// Export Model
module.exports = Event;