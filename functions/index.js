const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");

const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });

const { Client } = require("@googlemaps/google-maps-services-js");

const client = new Client({});

exports.geocode = onRequest((request, response) => {
  geocodeRequest(request, response, client);
});

exports.placesNearby = onRequest((request, response) => {
  placesRequest(request, response, client);
});
