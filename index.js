require([
    "esri/config",
     "esri/Map",
     "esri/views/MapView",

     "esri/Basemap",
     "esri/layers/VectorTileLayer",
     "esri/layers/TileLayer",

     "esri/widgets/Search"

   ], function (esriConfig, Map, MapView, Basemap, VectorTileLayer, TileLayer, Search) {


    //id: 424cd9fdc73f40b19666a47296645756

    
     esriConfig.apiKey = "AAPK9cc4cc305f9845c2bb3083f5c7ee4eea5zPDXY6y9PbgylTNH4pxcaa7EEaomXZE26iNJULwJdcMBYEaYCov3Y8zKdicns-0";
     
 
 
  const vectorTileLayer = new VectorTileLayer({
    portalItem: {
      id: "6976148c11bd497d8624206f9ee03e30" // Forest and Parks Canvas
    },
    opacity: 0.75
  });

  const imageTileLayer = new TileLayer({
    portalItem: {
      id: "1b243539f4514b6ba35e7d995890db1d" // World Hillshade
    }
  });

  const basemap = new Basemap({
    baseLayers: [

      imageTileLayer,
      vectorTileLayer

    ]
  });

  const map = new Map({
    basemap: basemap,
  });


  const view = new MapView({
    container: "viewDiv",
    map: map,

    center: [-100,40],
    zoom: 3

  });

  const search = new Search({  //Add Search widget
    view: view
  });

  view.ui.add(search, "top-right"); //Add to the map
   });