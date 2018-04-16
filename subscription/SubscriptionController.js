var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Subscription = require('./Subscription');

router.post('/', function (req, res) {
    Subscription.create({
            subscription : req.body
        }, 
        function (err, subscription) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(subscription);
        });
});

router.get('/', function (req, res) {
    Subscription.find({}, function (err, subscriptions) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(subscriptions);
    });
});



module.exports = router;