// $(document).ready(function() {
//   //Options data fill
//   $.each(hotels, function( index, hotel ) {
//     console.log(hotel.place.location)
//     var html = '<option value=' + hotel.id + '>' + hotel.name + '</options>'
//     $('#hotel-list').find('select').append(html);
//   });
//   $.each(restaurants, function( index, restaurant ) {
//     var html = '<option value=' + restaurant.id + '>' + restaurant.name + '</options>'
//     $('#restaurants-list').find('select').append(html);
//   });
//   $.each(activities, function( index, activity ) {
//     var html = '<option value=' + activity.id + '>' + activity.name + '</options>'
//     $('#activities-list').find('select').append(html);
//   });

// //Day picker functionality
//   //add to Day
//   $('#hotel-list').find('button').on('click', function(){
//     var text = $('#hotel-list').find('select option:selected').text();
//     var html = `<li class='list-group-item'>${text}<button class='btn btn-warning btn-sm pull-right'>x</button> <br clear='both'/></li> `;
//     $('#day-hotel-list').append(html);
//   });

//   $('#restaurants-list').find('button').on('click', function(){
//     var text = $('#restaurants-list').find('select option:selected').text();
//     var html = `<li class='list-group-item'>${text}<button class='btn btn-warning btn-sm pull-right'>x</button> <br clear='both'/></li> `;
//     $('#day-restaurants-list').append(html);
//   });

//   $('#activities-list').find('button').on('click', function(){
//     var text = $('#activities-list').find('select option:selected').text();
//     var html = `<li class='list-group-item'>${text}<button class='btn btn-warning btn-sm pull-right'>x</button> <br clear='both'/></li> `;
//     $('#day-activities-list').append(html);
//   });
//   //Remove from Day
//   $('#day-activities-list').on('click', 'button', function() {
//     console.log($(this).parent().text())
//   })


// //
// // var marker = new google.maps.Marker({
// //     position: myLatlng,
// //     title:"Hello World!"
// // });

// // To add the marker to the map, call setMap();
// // marker.setMap(map);

// });
