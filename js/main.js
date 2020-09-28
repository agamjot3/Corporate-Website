function initMap(){
    const loc = {
        lat : 40.058323 , lng: -74.405663;
    }
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
    );
    const marker = new google.maps.Marker({position:loc,map:map});
}