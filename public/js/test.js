$(document).ready(function() {
  console.log('im ready')
  console.log('my hotels', hotels)
  $.each(hotels, function( index, hotel ) {
    var html = '<option value=' + hotel.id + '>' + hotel.name + '</options>'
    console.log('my html', html)
    $('#hotel-list').find('select').append(html)
//    console.log(value.name );
  });
//  $(#hotel-list).append()
})
