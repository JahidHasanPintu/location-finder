
const display= document.getElementById('demo');

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);

    }else{
        display.innerHTML= "Your browser doesn't support location";
    }
    // displayc.innerHTML = "working"
    // console.log('working');
}

function showPosition(position){
    display.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}