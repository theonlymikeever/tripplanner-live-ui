function Map(id){
  this.id = id;
  this.init();
  this.markerList = {};
}

Map.prototype.init = function(){
  var myLatlng = new google.maps.LatLng(40.705189,-74.009209);
  // set the map options hash
  var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  // get the maps div's HTML obj
  var map_canvas_obj = document.getElementById(this.id);
  // initialize a new Google Map with the options
  var map = new google.maps.Map(map_canvas_obj, mapOptions);
  this.map = map;
  // Add the marker to the map
  var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Hello World!"
  });
  // Add the marker to the map by calling setMap()
  marker.setMap(map);

}

Map.prototype.setMarker = function(coords, title) {
  var myLatlng = new google.maps.LatLng(coords[0],coords[1]);
  var marker = new google.maps.Marker({
      position: myLatlng,
      title: title
  });
  console.log(marker)
  marker.setMap(this.map);
  this.map.setCenter(myLatlng)
  this.markerList[title] = marker
}

//this is where we are!
Map.prototype.clear = function(title){
  this.markerList[title].setMap(null)
  let previousTitle = Object.keys(this.markerList)[0]
  console.log(this.markerList[previousTitle])
  // this.map.setCenter()
}
