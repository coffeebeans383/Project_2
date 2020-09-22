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
  
  var newtry = "https://data.nashville.gov/resource/p886-fnbd.json?$limit=1000";
  
  d3.json(newtry, function (response) {
  
    console.log(response);
  
    for (var i = 0; i < response.length; i++) {
      var location = response[i].geocoded_column;
      var myIcon = L.icon({
        iconUrl: 'Images/bus_stop.png',
        iconSize: [53, 53],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      });
      if (location) {
        L.marker([location.latitude, location.longitude], { icon: myIcon })
          .addTo(myMap)
          .bindPopup("<h3>Stop ID:" + response[i].stop_id_number + "<h3><h3>" + response[i].stop_name + "<h3><h3>Bench:" + response[i].bench + "<h3>Shelter:" + response[i].shelter + "</h3>");
      }
    }
  
  });