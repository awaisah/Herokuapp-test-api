# Herokuapp-test-api
An API made using Express JS which was developed as part of a programming test

### The initial breif is as follows:

  Please complete the online test following the link: https://bpdts-test-app.herokuapp.com
  
  The link contains a swagger spec for an API.
  
  Using the language of your choice please build your own API which calls the API at https://bpdts-test-app.herokuapp.com/, and returns people who are listed as either living in London, or whose current coordinates are within 50 miles of London.

### London longitude and latitude

In order to get a starting point I first found the coordinates to start with for London. I simply typed "London longitude and latitude" whcih returned "51.5074° N, 0.1278° W" which would be Longitude: 51.5074 and Latitude: 0.1278. I have hardcoded this into my api.js file. Understandably these values will very much likely vary for different individuals depending on the source and the exactly location within London being used.
