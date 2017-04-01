
var maptip = d3.select(".maptooltip"),
  mapext = d3.select(".mapext"),
  mapcalls = d3.select(".mapcalls");




labels.forEach( function (d) {
 console.log(d);
})


  //range

  var range = d3.scale.linear()
    .domain([9, 109])
     .range([5,25])


if(window.outerWidth < 700) {
  var zoom = 15;
  d3.select("#callmap").style("height", "1000px")
}
else {
   var zoom= 14;
}
 var mymap = L.map('callmap').setView([-25.933725,28.008836], zoom);

 L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(mymap);

function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: clickFeature
//                mousemove: tooltipMove
        });
    }

function highlightFeature(e) {
mapext
 .text("Extension " + e.target.feature.properties.extension);

mapcalls
 .text(e.target.feature.properties.calls + " calls")

maptip
 .style("display", "block")
 .style("top", e.originalEvent.pageY + "px")
 .style("left", e.originalEvent.pageX + 25 + "px")
}

function resetHighlight(e) {

maptip.style("display","none");

}

function clickFeature(e) {
coords = e.latlng.lat + ", " + e.latlng.lng;
console.log(coords);

}

var geoJsonLayer = L.geoJson(extensions, {


     style: function (feature) {


         return {
             weight: 1,
             fillOpacity: 0.1,
             fillColor: "red",
             color:"#fff"

         }
     },

     // onEachFeature: onEachFeature,

 }).addTo(mymap);

 var geoJsonLayer2 = L.geoJson(points, {

     style: function (feature) {

     },

     onEachFeature: onEachFeature,

     pointToLayer: function (feature, latlng) {

       var rad = range(feature.properties.calls);

       return L.circleMarker(latlng, {
         radius: rad,
         fillColor: "crimson",
         color: "red",
         weight: 10,
         opacity: 1,
         fillOpacity: 1
       });

     }



 }).addTo(mymap);

 if(window.outerWidth < 700) {

   labels.forEach( function (d) {

 var textLatLng = [d.lat, d.lon];
     var myTextLabel = L.marker(textLatLng, {
         icon: L.divIcon({
             className: 'text-labels',   // Set class for CSS styling
             html: d.label
         }),
         draggable: false,       // Allow label dragging...?
         zIndexOffset: 1000     // Make appear above other map features
     }).addTo(mymap);


 });

}
 mymap.scrollWheelZoom.disable();




 // var circle = L.circle([-25.93222792852086, 27.998828887939453], 50, {
 // 		    color: 'dodgerblue',
 // 		    fillColor: 'dodgerblue',
 // 		    fillOpacity: 1
 // 		}).addTo(mymap);
