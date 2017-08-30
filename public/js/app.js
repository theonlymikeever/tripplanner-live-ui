$(function(){
  var map = new Map('map');


   //Options data fill
  $.each(hotels, function( index, hotel ) {
    var html = '<option value=' + hotel.id + '>' + hotel.name + '</options>'
    $('#hotel-list').find('select').append(html);
    $('#hotel-list').find('option[value="' + hotel.id + '"]').data({ location: hotel.place.location, title: hotel.name })
  });
  $.each(restaurants, function( index, restaurant ) {
    var html = '<option value=' + restaurant.id + '>' + restaurant.name + '</options>'
    $('#restaurants-list').find('select').append(html);
    $('#restaurants-list').find('option[value="' + restaurant.id + '"]').data({ location: restaurant.place.location, title: restaurant.name })
  });
  $.each(activities, function( index, activity ) {
    var html = '<option value=' + activity.id + '>' + activity.name + '</options>'
    $('#activities-list').find('select').append(html);
    $('#activities-list').find('option[value="' + activity.id + '"]').data({ location: activity.place.location, title: activity.name })
  });

//Day picker functionality
  //add to Day
  $('#hotel-list').find('button').on('click', function(){
    var text = $('#hotel-list').find('select option:selected').text();
    var data = $('#hotel-list').find('select option:selected').data()
    // console.log(data)
    var html = `<li class='list-group-item'>${text}<button class='btn btn-warning btn-sm pull-right'>x</button> <br clear='both'/></li> `;
    $('#day-hotel-list').append(html);
    //pass our data
    $('#day-hotel-list').find('li').last().data(data)
    //set marker
   let latLong = $('#hotel-list').find('select option:selected').data('location')
   let title = $('#hotel-list').find('select option:selected').data('title')
    map.setMarker(latLong, title)
  });

  $('#restaurants-list').find('button').on('click', function(){
    var text = $('#restaurants-list').find('select option:selected').text();
    var data = $('#restaurants-list').find('select option:selected').data()
    var html = `<li class='list-group-item'>${text}<button class='btn btn-warning btn-sm pull-right'>x</button> <br clear='both'/></li> `;
    $('#day-restaurants-list').append(html);
    //pass our data
    $('#day-restaurants-list').find('li').last().data(data)
    //set marker
   let latLong = $('#restaurants-list').find('select option:selected').data('location')
   let title = $('#restaurants-list').find('select option:selected').data('title')
    map.setMarker(latLong, title)

  });

  $('#activities-list').find('button').on('click', function(){
    var text = $('#activities-list').find('select option:selected').text();
    var data = $('#activities-list').find('select option:selected').data()
    var html = `<li class='list-group-item'>${text}<button class='btn btn-warning btn-sm pull-right'>x</button> <br clear='both'/></li> `;
    $('#day-activities-list').append(html);
    //pass our data
    $('#day-activities-list').find('li').last().data(data)
    //set marker
   let latLong = $('#activities-list').find('select option:selected').data('location')
   let title = $('#activities-list').find('select option:selected').data('title')
    map.setMarker(latLong, title)

  });
  //Remove from Day
  $('#day-hotel-list').on('click', 'button', function() {
    let title = $(this).parent().data('title')
    // map.markerList[title].setMap(null)
    map.clear(title)
  })
  $('#day-restaurants-list').on('click', 'button', function() {
    let title = $(this).parent().data('title')
    map.markerList[title].setMap(null)
  })
  $('#day-activities-list').on('click', 'button', function() {
    let title = $(this).parent().data('title')
    map.markerList[title].setMap(null)
  })


});
