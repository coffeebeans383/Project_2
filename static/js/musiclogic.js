var myMap = L.map("map", {
  center: [36.162, -86.781],
  zoom: 13
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// var newtry = "https://data.nashville.gov/resource/dqkw-tj5j.json";
// https://www.google.com/maps/search/music+venues+near+Nashville,+TN/@36.1604391,-86.7894525,13z/data=!3m1!4b1
var query ="static/data/live_music.csv"
// var queryUrl ="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=36.1604391%2C-86.7894525&keyword=live+music&radius=8000&key=AIzaSyAZxl9enc6fvinOicCzKke3ZFedIjUT8Qg"
// var googAPI = https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=36.1604391,-86.7894525&radius=2000&keyword=live+music&key=YOUR_API_KEY


d3.csv(query, function (response) {


    // console.log(data);
//   });
// d3.sqlite(query, function(response) {

console.log(response);

  for (var i = 0; i < response.length; i++) {
    var location = response[i];
      L.marker([location.latitude, location.longitude])
      .addTo(myMap)
      .bindPopup("<h3>Status:" + response[i].business_status + "<h3>Name:" + response[i].name + "<h3>Type: " + response[i].vicinity + "<h3>");
    
  }
});

