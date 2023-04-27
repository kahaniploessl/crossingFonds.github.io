let map;

(() => {


  var SFU = L.marker([49.278031, -122.919894]).bindPopup('Simon Fraser University'),
          VIVO = L.marker([49.260932,-123.047184]).bindPopup('VIVO'),
          COV = L.marker([49.260467, -123.113994]).bindPopup('City of Vancouver'),
          RBCM = L.marker([48.419505, -123.368823]).bindPopup('Royal BC Museum')
          UBC = L.marker([49.260632, -123.240891]).bindPopup('University of British Columbia'),
          OCAD= L.marker([43.653178, -79.391014]).bindPopup('OCAD University');

  var Instituions = L.layerGroup([SFU, VIVO, COV, RBCM, UBC, OCAD]);


  var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
  });

  var map = L.map('map', {
      center: [49.2, -123.02],
      zoom: 11,
      layers: [osm, Instituions]
  });

  var baseMap = {
      "OpenStreetMap": osm
  };

  
  
  // var layerControl = L.control.layers(baseMap, map1).addTo(map);

  // map = L.map('map').setView([49.2, -123.02], 11);

  // var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     maxZoom: 19,
  //     attribution: '© OpenStreetMap'
  // }).addTo(map);

  // map.whenReady(() => {

    img0 = L.distortableImageOverlay('https://crossingfonds.github.io/assets/Photos/TheWorkingImage_24.jpg', {
      selected: true,
      //fullResolutionSrc: 'large.jpg',
    });

    img1 = L.distortableImageOverlay('https://crossingfonds.github.io/assets/Photos/TheWorkingImage_02.jpg', {
      selected: true,
      //fullResolutionSrc: 'large.jpg',
    });

    img2 = L.distortableImageOverlay('https://crossingfonds.github.io/assets/Photos/SDOtoSlides109-148.jpg', {
      selected: true,
      //fullResolutionSrc: 'large.jpg',
    });

    img3 = L.distortableImageOverlay('https://crossingfonds.github.io/assets/Photos/SDOtoSlides149-162.jpg', {
      selected: true,
      //fullResolutionSrc: 'large.jpg',
    });

    img4 = L.distortableImageOverlay('https://crossingfonds.github.io/assets/Photos/SDA_IWA_030.jpg', {
      selected: true,
      //fullResolutionSrc: 'large.jpg',
    });

    img5 = L.distortableImageOverlay('https://crossingfonds.github.io/assets/Photos/SD-01-01-0066.jpg', {
      selected: true,
      //fullResolutionSrc: 'large.jpg',
    });


    var map1 = {
      "Instituions": Instituions,
      "The Working Images 24": img0,
      "TTheWorkingImage_02": img1,
      "SDOtoSlides109-148": img2,
      "SDOtoSlides149-162": img3,
      "SDA_IWA_030": img4,
      "SD-01-01-0066": img5
    };

  // });


  L.control.layers(baseMap, map1).addTo(map)



})();





// L.Control.geocoder().addTo(map);
