
  // Create the tile layer that will be the background of our map
  var darkMap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
  });

  //API
  //beer permit : https//data.nashville.gov/resource/3wb6-xy3j.json
  //music venues : 
  //public art : https://data.nashville.gov/resource/dqkw-tj5j.json
  // strip clubs : https://data.nashville.gov/resource/g97f-x87i.json
  // metro parks : https://data.nashville.gov/resource/544k-ba3u.json
