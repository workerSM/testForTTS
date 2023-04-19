let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
    gestureHandling: "cooperative", //cooperative는 ctrl과 함께 동작, greedy는 모든 동작(마우스스크롤)에 확대축소 반응함
    disableDefaultUI: true  // 구글맵이 제공하는 기본 ui 제거함
  });
}

window.initMap = initMap;