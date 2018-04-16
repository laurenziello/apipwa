const app = require('./app');
const port = process.env.PORT || 3000;

const webpush = require('web-push');

const vapidKeys = {
    "publicKey":"*",
    "privateKey":"*"
};


webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});