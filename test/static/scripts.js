// execute when the DOM is fully loaded

$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {
    // Create the chart
    Highcharts.stockChart('container', {

        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'AAPL Stock Price'
        },

        series: [{
            name: 'AAPL',
            data: data,
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
});


// /**
//  * Adds a single marker for place to map.
//  */
// function addMarker(place)
// {
//     // set latitude and longitude
//     var myLatLng = {lat: parseFloat(place.latitude), lng: parseFloat(place.latitude)};

//     var marker = new google.maps.Marker({
//     position: myLatlng,
//     title: place["place_name"] +", "+ place["admin_name1"]
//     });

//     // To add the marker to the map, call setMap();
//     marker.setMap(map);

//     // Add marker to the markers list
//     markers.push(marker);
// }

// /**
//  * Configures application.
//  */
// function configure()
// {
//     // update UI after map has been dragged
//     google.maps.event.addListener(map, "dragend", function() {

//         // if info window isn't open
//         // http://stackoverflow.com/a/12410385
//         if (!info.getMap || !info.getMap())
//         {
//             update();
//         }
//     });

//     // update UI after zoom level changes
//     google.maps.event.addListener(map, "zoom_changed", function() {
//         update();
//     });

//     // configure typeahead
//     $("#q").typeahead({
//         highlight: false,
//         minLength: 1
//     },
//     {
//         display: function(suggestion) { return null;},
//         limit: 10,
//         source: search,
//         templates: {
//             suggestion: Handlebars.compile(
//                 "<div>{{ place_name }}, {{ admin_name1 }}, {{ postal_code }}</div>"
//             )
//         }
//     });

//     // re-center map after place is selected from drop-down
//     $("#q").on("typeahead:selected", function(eventObject, suggestion, name) {

//         // set map's center
//         map.setCenter({lat: parseFloat(suggestion.latitude), lng: parseFloat(suggestion.longitude)});

//         // update UI
//         update();
//     });

//     // hide info window when text box has focus
//     $("#q").focus(function(eventData) {
//         info.close();
//     });

//     // re-enable ctrl- and right-clicking (and thus Inspect Element) on Google Map
//     // https://chrome.google.com/webstore/detail/allow-right-click/hompjdfbfmmmgflfjdlnkohcplmboaeo?hl=en
//     document.addEventListener("contextmenu", function(event) {
//         event.returnValue = true;
//         event.stopPropagation && event.stopPropagation();
//         event.cancelBubble && event.cancelBubble();
//     }, true);

//     // update UI
//     update();

//     // give focus to text box
//     $("#q").focus();
// }

// /**
//  * Searches database for typeahead's suggestions.
//  */
// function search(query, syncResults, asyncResults)
// {
//     // get places matching query (asynchronously)
//     var parameters = {
//         q: query
//     };
//     $.getJSON(Flask.url_for("search"), parameters)
//     .done(function(data, textStatus, jqXHR) {

//         // call typeahead's callback with search results (i.e., places)
//         asyncResults(data);
//     })
//     .fail(function(jqXHR, textStatus, errorThrown) {

//         // log error to browser's console
//         console.log(errorThrown.toString());

//         // call typeahead's callback with no results
//         asyncResults([]);
//     });
// }

// /**
//  * Shows info window at marker with content.
//  */
// function showInfo(marker, content)
// {
//     // start div
//     var div = "<div id='info'>";
//     if (typeof(content) == "undefined")
//     {
//         // http://www.ajaxload.info/
//         div += "<img alt='loading' src='/static/ajax-loader.gif'/>";
//     }
//     else
//     {
//         div += content;
//     }

//     // end div
//     div += "</div>";

//     // set info window's content
//     info.setContent(div);

//     // open info window (if not already open)
//     info.open(map, marker);
// }

// /**
//  * Updates UI's markers.
//  */
// function update()
// {
//     // get map's bounds
//     var bounds = map.getBounds();
//     var ne = bounds.getNorthEast();
//     var sw = bounds.getSouthWest();

//     // get places within bounds (asynchronously)
//     var parameters = {
//         ne: ne.lat() + "," + ne.lng(),
//         q: $("#q").val(),
//         sw: sw.lat() + "," + sw.lng()
//     };
//     $.getJSON(Flask.url_for("update"), parameters)
//     .done(function(data, textStatus, jqXHR) {

//       // remove old markers from map
//       removeMarkers();

//       // add new markers to map
//       for (var i = 0; i < data.length; i++)
//       {
//           addMarker(data[i]);
//       }
//     })
//     .fail(function(jqXHR, textStatus, errorThrown) {

//         // log error to browser's console
//         console.log(errorThrown.toString());
//     });
// };
