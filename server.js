const app = require('./app');
const port = process.env.PORT || 3000;

const webpush = require('web-push');

const vapidKeys = {
    "publicKey":"BGal3cKBZkSx8ymaFACUhGS1DpsgUO_xmjUzkk0zYr1es6pjFKscTQ_9RMv8zwOEYuedFWp_H91IAjuTKiapueM",
    "privateKey":"GEDjdBnWIIMB_ImV0iYmCtTxWTyySsen6ig1Z5i3gyg"
};


webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});