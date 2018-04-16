var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var webpush = require('web-push');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Subscription = require('../subscription/Subscription');


router.get('/', (req, res) => {
    Subscription.find({}, function (err, subscriptions) {
        if (err) {
            return res.status(500).send("There was a problem finding the users.");
        } else {
            const notificationPayload = {
                "notification": {
                    "title": "Angular News",
                    "body": "Newsletter Available!",
                    "icon": "assets/main-page-logo-small-hat.png",
                    "vibrate": [100, 50, 100],
                    "data": {
                        "dateOfArrival": Date.now(),
                        "primaryKey": 1
                    },
                    "actions": [{
                        "action": "explore",
                        "title": "Go to the site"
                    }]
                }
            };
            Promise.all(subscriptions.map(sub => webpush.sendNotification(
                sub.subscription, JSON.stringify(notificationPayload))
                .then(values => values)
                .catch(err => err)
            ))
                .then(values => {
                    console.log(values);
                    res.status(200).json({ message: 'Newsletter sent successfully.' });
                })
                .catch(err => {
                    console.error("Error sending notification, reason: ", err);
                    res.sendStatus(500);
                });



        }
    });
});



module.exports = router;