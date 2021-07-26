function initMap() {
  const leaf = { lat: 51.51959, lng: -0.14341 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: leaf,
    zoom: 15,
    mapId: 'f8119b886822c2'
  });
  const marker = new google.maps.Marker({
    position: leaf,
    map: map,
  });
}
