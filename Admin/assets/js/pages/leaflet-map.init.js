var mymap=L.map("leaflet-map").setView([51.505,-.09],13);L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",{maxZoom:18,attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1}).addTo(mymap);var markermap=L.map("leaflet-map-marker").setView([51.505,-.09],13);L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",{maxZoom:18,attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1}).addTo(markermap),L.marker([51.5,-.09]).addTo(markermap),L.circle([51.508,-.11],{color:"#34c38f",fillColor:"#34c38f",fillOpacity:.5,radius:500}).addTo(markermap),L.polygon([[51.509,-.08],[51.503,-.06],[51.51,-.047]],{color:"#ff7784",fillColor:"#ff7784"}).addTo(markermap);var popupmap=L.map("leaflet-map-popup").setView([51.505,-.09],13);L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",{maxZoom:18,attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1}).addTo(popupmap),L.marker([51.5,-.09]).addTo(popupmap).bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup(),L.circle([51.508,-.11],500,{color:"#ef6767",fillColor:"#ef6767",fillOpacity:.5}).addTo(popupmap).bindPopup("I am a circle."),L.polygon([[51.509,-.08],[51.503,-.06],[51.51,-.047]],{color:"#ff7784",fillColor:"#ff7784"}).addTo(popupmap).bindPopup("I am a polygon.");var popup=L.popup(),customiconsmap=L.map("leaflet-map-custom-icons").setView([51.5,-.09],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(customiconsmap);var LeafIcon=L.Icon.extend({options:{iconSize:[45,95],iconAnchor:[22,94],popupAnchor:[-3,-76]}}),greenIcon=new LeafIcon({iconUrl:"/static/images/logo-sm.svg"});L.marker([51.5,-.09],{icon:greenIcon}).addTo(customiconsmap);var interactivemap=L.map("leaflet-map-interactive-map").setView([37.8,-96],4);function getColor(e){return 1e3<e?"#7FB9F5":500<e?"#ff7784":200<e?"#318FF0":100<e?"#4499F1":50<e?"#55A2F2":20<e?"#64AAF3":10<e?"#72B2F4":"#7FB9F5"}function style(e){return{weight:2,opacity:1,color:"white",dashArray:"3",fillOpacity:.7,fillColor:getColor(e.properties.density)}}L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",{maxZoom:18,attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox/light-v9",tileSize:512,zoomOffset:-1}).addTo(interactivemap);var geojson=L.geoJson(statesData,{style:style}).addTo(interactivemap),cities=L.layerGroup();L.marker([39.61,-105.02]).bindPopup("This is Littleton, CO.").addTo(cities),L.marker([39.74,-104.99]).bindPopup("This is Denver, CO.").addTo(cities),L.marker([39.73,-104.8]).bindPopup("This is Aurora, CO.").addTo(cities),L.marker([39.77,-105.23]).bindPopup("This is Golden, CO.").addTo(cities);var mbAttr='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',mbUrl="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",grayscale=L.tileLayer(mbUrl,{id:"mapbox/light-v9",tileSize:512,zoomOffset:-1,attribution:mbAttr}),streets=L.tileLayer(mbUrl,{id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,attribution:mbAttr}),layergroupcontrolmap=L.map("leaflet-map-group-control",{center:[39.73,-104.99],zoom:10,layers:[streets,cities]}),baseLayers={Grayscale:grayscale,Streets:streets},overlays={Cities:cities};L.control.layers(baseLayers,overlays).addTo(layergroupcontrolmap);