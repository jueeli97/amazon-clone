const functions = require("firebase-functions");
const express = require("express");
//const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HWJn4FU3tGX8CNTjxmG3X2RijXZEgczCGJ5qvMRNnojgOx9zcdWndWUfPwpjCqIDXCsvzzhOyCpGRXGCy5tCwMR00YBvYAxin"
);

// API

// App config
const app = express();

// Middlewares
//app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "Rs.",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
