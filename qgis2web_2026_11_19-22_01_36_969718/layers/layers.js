var wms_layers = [];

var format_SebaranISPA_0 = new ol.format.GeoJSON();
var features_SebaranISPA_0 = format_SebaranISPA_0.readFeatures(json_SebaranISPA_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SebaranISPA_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SebaranISPA_0.addFeatures(features_SebaranISPA_0);
var lyr_SebaranISPA_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SebaranISPA_0, 
                style: style_SebaranISPA_0,
                popuplayertitle: 'Sebaran ISPA',
                interactive: true,
    title: 'Sebaran ISPA<br />\
    <img src="styles/legend/SebaranISPA_0_0.png" /> 0 - 0<br />\
    <img src="styles/legend/SebaranISPA_0_1.png" /> 0 - 28.4<br />\
    <img src="styles/legend/SebaranISPA_0_2.png" /> 28.4 - 37.6<br />\
    <img src="styles/legend/SebaranISPA_0_3.png" /> 37.6 - 139<br />\
    <img src="styles/legend/SebaranISPA_0_4.png" /> 139 - 278<br />' });
var format_SebaranKarhutla_1 = new ol.format.GeoJSON();
var features_SebaranKarhutla_1 = format_SebaranKarhutla_1.readFeatures(json_SebaranKarhutla_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SebaranKarhutla_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SebaranKarhutla_1.addFeatures(features_SebaranKarhutla_1);
var lyr_SebaranKarhutla_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SebaranKarhutla_1, 
                style: style_SebaranKarhutla_1,
                popuplayertitle: 'Sebaran Karhutla',
                interactive: true,
    title: 'Sebaran Karhutla<br />\
    <img src="styles/legend/SebaranKarhutla_1_0.png" /> 0 - 1376<br />\
    <img src="styles/legend/SebaranKarhutla_1_1.png" /> 1376 - 3636<br />\
    <img src="styles/legend/SebaranKarhutla_1_2.png" /> 3636 - 5318<br />\
    <img src="styles/legend/SebaranKarhutla_1_3.png" /> 5318 - 9168<br />\
    <img src="styles/legend/SebaranKarhutla_1_4.png" /> 9168 - 16276<br />' });

lyr_SebaranISPA_0.setVisible(true);lyr_SebaranKarhutla_1.setVisible(true);
var layersList = [lyr_SebaranISPA_0,lyr_SebaranKarhutla_1];
lyr_SebaranISPA_0.set('fieldAliases', {'ID_0': 'ID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'kabupaten_key': 'kabupaten_key', 'kabupaten': 'kabupaten', 'ispa': 'ispa', 'karhutla': 'karhutla', });
lyr_SebaranKarhutla_1.set('fieldAliases', {'ID_0': 'ID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'kabupaten_key': 'kabupaten_key', 'kabupaten': 'kabupaten', 'ispa': 'ispa', 'Luas Karhutla (ha)': 'Luas Karhutla (ha)', });
lyr_SebaranISPA_0.set('fieldImages', {'ID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'kabupaten_key': 'TextEdit', 'kabupaten': 'TextEdit', 'ispa': 'Range', 'karhutla': 'TextEdit', });
lyr_SebaranKarhutla_1.set('fieldImages', {'ID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'kabupaten_key': 'TextEdit', 'kabupaten': 'TextEdit', 'ispa': 'Range', 'Luas Karhutla (ha)': 'TextEdit', });
lyr_SebaranISPA_0.set('fieldLabels', {'ID_0': 'hidden field', 'COUNTRY': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'ID_2': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'kabupaten_key': 'no label', 'kabupaten': 'hidden field', 'ispa': 'no label', 'karhutla': 'hidden field', });
lyr_SebaranKarhutla_1.set('fieldLabels', {'ID_0': 'hidden field', 'COUNTRY': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'ID_2': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'kabupaten_key': 'no label', 'kabupaten': 'hidden field', 'ispa': 'hidden field', 'Luas Karhutla (ha)': 'no label', });
lyr_SebaranKarhutla_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});