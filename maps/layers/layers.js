var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_mockelectionlocations_1 = new ol.format.GeoJSON();
var features_mockelectionlocations_1 = format_mockelectionlocations_1.readFeatures(json_mockelectionlocations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mockelectionlocations_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mockelectionlocations_1.addFeatures(features_mockelectionlocations_1);
var lyr_mockelectionlocations_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mockelectionlocations_1, 
                style: style_mockelectionlocations_1,
                interactive: true,
                title: '<img src="styles/legend/mockelectionlocations_1.png" /> mock-election-locations'
            });

lyr_OSMStandard_0.setVisible(true);lyr_mockelectionlocations_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_mockelectionlocations_1];
lyr_mockelectionlocations_1.set('fieldAliases', {'Location': 'Location', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_mockelectionlocations_1.set('fieldImages', {'Location': '', 'Address': '', 'Latitude': '', 'Longitude': '', });
lyr_mockelectionlocations_1.set('fieldLabels', {'Location': 'no label', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_mockelectionlocations_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});