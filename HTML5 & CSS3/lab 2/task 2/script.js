// Initialize and add the map
let map;

async function initMap(lat, lng) {
  const position = { lat: lat, lng: lng };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "My Location",
  });
}

navigator.geolocation.getCurrentPosition((position) => {
  initMap(position.coords.latitude, position.coords.longitude);
});

var select = document.getElementById("country");
var countryCoords = {
  usa: [44.5, -89.5],
  lithaunia: [55.296249, 25.276987],
  ksa: [24.774265, 46.738586],
};

select.addEventListener("change", () => {
  initMap(countryCoords[select.value][0], countryCoords[select.value][1]);
});
