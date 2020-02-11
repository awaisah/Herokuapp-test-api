var express = require('express');
const axios = require('axios');

var router = express.Router();

const latitude = 51.5074;
const longitude = 0.1278;

// a get for the users in a specific city
router.get('/users/:city', function(req, res, next) {
  const city = req.params.city;
  const url = "https://bpdts-test-app.herokuapp.com/city/"+city+"/users";

  // Get the response from the api
  axios.get(url)
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    res.json([]);
  });
});

// a get for the users on api database
router.get('/users', function(req, res, next) {
  const url = "https://bpdts-test-app.herokuapp.com/users";

  // Get the response from the api
  axios.get(url)
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    res.json([]);
  });
});

module.exports = router;
