var mongoose = require('mongoose');  

var SubscribtionSchema = mongoose.Schema({ 
    subscription: JSON
});

module.exports = mongoose.model('Subscription', SubscribtionSchema);