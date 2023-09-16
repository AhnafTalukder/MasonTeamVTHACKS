require([
    "esri/config",
     "esri/Map",
     "esri/views/MapView",

     "esri/Basemap",
     "esri/layers/FeatureLayer",

     "esri/widgets/Search"

   ], function (esriConfig, Map, MapView, Search, FeatureLayer) {




    
     esriConfig.apiKey = "";
     
 


const myMap = new Map({
      basemap: "streets-vector"
    });
  
    const air_quality_layer = new FeatureLayer({
      url: "https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/Air_Quality_PM25_Latest_Results/FeatureServer"
    });
    myMap.add(air_quality_layer);


  const view = new MapView({
    container: "viewDiv",
    map: myMap,

    center: [-100,40],
    zoom: 3

  });

  const search = new Search({  //Add Search widget
    view: view
  });

  view.ui.add(search, "top-right"); //Add to the map
   });
