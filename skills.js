
                                  
                                  
    //  Load google Pie charts
                                                google.charts.load('current', {'packages':['corechart']});
                                                google.charts.setOnLoadCallback(drawChart);
                                                
                                                // Draw the chart and set the chart values
                                                function drawChart() {
                                                  var data = google.visualization.arrayToDataTable([
                                                  ['Skills', 'Percentages'],
                                                  ['Front-End-Web-Developer', 90],
                                                  ['UX/UI Design', 70],
                                                  ['Back-End-Web-Developer', 70],
                                                  ['Database', 55],
                                                  ['Data Analysis', 75]
                                                ]);
                                                
                                                  // Optional; add a title and set the width and height of the chart :::: is3D: true,
                                                  var options = {'title':'My Skills Pie Chart', 'width':900, 'height':450, backgroundColor: 'transparent',};
                                                
                                                  // Display the chart inside the <div> element with id="piechart"
                                                  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
                                                  chart.draw(data, options);

                                                 
                                                }
                                                
                                            

// Google map for Rosemount

                                                // function myMap() {
                                                //     var mapCanvas = document.getElementById("map");
                                                //     var mapOptions = {
                                                //       center: new google.maps.LatLng(46.7296, -94.6859), 
                                                //       zoom: 10
                                                //     };
                                                //     var map = new google.maps.Map(mapCanvas, mapOptions);
                                                //     var marker = new google.maps.Marker({position: center});
                                                //     marker.setMap(map);
                                                //   }
                                              

                                               
                                            //    google test
                                            google.charts.load('current', {
                                                'packages': ['map'],
                                                // Note: you will need to get a mapsApiKey for your project.
                                                // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                                                'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
                                              });
                                              google.charts.setOnLoadCallback(drawMap);
                                          
                                              function drawMap () {
                                                var data = new google.visualization.DataTable();
                                                data.addColumn('string', 'Address');
                                                data.addColumn('string', 'Location');
                                          
                                                data.addRows([
                                                  ['Minnesota, Mn 55068, United States','Resident']
                                                 
                                                ]);
                                          
                                                var options = {
                                                  mapType: 'Minnesota',
                                                  zoomLevel: 10,
                                                  showTooltip: true,
                                                  showInfoWindow: true,
                                                  useMapTypeControl: true,
                                                  maps: {
                                                    // Your custom mapTypeId holding custom map styles.
                                                    styledMap: {
                                                      name: 'Styled Map', // This name will be displayed in the map type control.
                                                      styles: [
                                                        {featureType: 'poi.attraction',
                                                         stylers: [{color: '#fce8b2'}]
                                                        },
                                                        {featureType: 'road.highway',
                                                         stylers: [{hue: '#0277bd'}, {saturation: -50}]
                                                        },
                                                        {featureType: 'road.highway',
                                                         elementType: 'labels.icon',
                                                         stylers: [{hue: '#000'}, {saturation: 100}, {lightness: 50}]
                                                        },
                                                        {featureType: 'landscape',
                                                         stylers: [{hue: '#259b24'}, {saturation: 10}, {lightness: -22}]
                                                        }
                                                  ]}}
                                                };
                                          
                                                var map = new google.visualization.Map(document.getElementById('map_div'));
                                          
                                                map.draw(data, options);
                                              }
                                            // end google test