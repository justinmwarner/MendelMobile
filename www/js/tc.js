
var dashboard3 = (function () {

    // If we have alerts, we want to find relevant charts. 
    // So we should go through the alerts ID's that we return relevant charts.
    function processAlerts(alerts) {
        if (!alerts)
            return;

        // TODO: Create friendly message(s) for the alerts to tell the users.
        return alerts;
    }

    function getAlertChartHTML(alerts) {
        if (!alerts)
            return;

        // TODO: Add in code to process relevant charts.  Talk to Lee and Daniel about return codes?
        
        return '<div class="row">' +
        'todo: Create chart HTML' +
            '</div>';
    }

    /* Render the dashboard */

    function render() {
        // Create our own format function because javascript is awesome and doesn't have it, cuz you know... No one uses it.
        if (!String.prototype.format) {
            String.prototype.format = function () {
                var args = arguments;
                return this.replace(/{(\d+)}/g, function (match, number) {
                    return typeof args[number] != 'undefined'
                      ? args[number]
                      : match
                    ;
                });
            };
        }


        var alertsMessages = 'Low pH';
        var alertsCharts = '';
        if (!alertsMessages) {
            alertsMessages = 'You have no alerts :)';
        }
        else {
            processAlerts(alertsMessages);
            alertsCharts =


        '<div class="list card">' +
            '<div class="item item-divider">Alerts Charts</div>' +
            '<div class="item item-body">' +
                        getAlertChartHTML(alertsMessages)+
            '</div>' +
        '</div>';
        }
        var dropdownDiv =
            '<div class="row">' +
  '<div class="col col-75"></div>' +
  '<div class="col">'+
            '<div class="list">' +
              '<label class="item item-input item-select">' +
                '<div class="input-label">' +
                  'Timescale' +
                '</div>' +
                '<select>' + 
                  '<option>15 Minutes</option>' +
                  '<option selected>1 Hour</option>' +
                    '<option>8 Hours</option>' +
                    '<option>1 Day</option>' +
                    '<option>1 Week</option>' +
                    '<option>1 Month</option>' +
                    '<option>All Time</option>' +
                '</select>' +
             ' </label>' +
            '</div>' +
            '</div>' +
            '</div>';




        var html =
        '<div class="list card">' +
            '<div class="item item-divider">Alerts</div>' +
            '<div class="item item-body">' +
                '<div class="row">' +
                '{0}' +
                '</div>' +
            '</div>' +
        '</div>' +
        '{1}' +
        '{2}' +
        '<div class="row row-center">' +
            '<div id="chart1" class="col-50"></div>' +
            '<div id="chart2" class="col-50"></div>' +
        '</div>' +
        '<div class="row row-center">' +
            '<div id="chart3" class="col-50">1</div>' +
            '<div id="chart4" class="col-50">2</div>' +
        '</div>' +
        '<div class="row row-center">' +
            '<div id="chart5" class="col-50">3</div>' +
            '<div id="chart6" class="col-50">4</div>' +
        '</div>';
        html = html.format(alertsMessages, alertsCharts, dropdownDiv);
        $("#content").html(html);





        var chart1 = c3.generate({
            bindto: '#chart1',
            data: {
                x: 'x',
                columns: [
                    ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
                    ['data1', 30, 200, 100, 400, 150, 250]
                ]
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: '%Y-%m-%d'
                    }
                }
            }
        });


        var chart2 = c3.generate({
            bindto: '#chart2',
            data: {
                columns: [
                    ['data', 6.8]
                ],
                type: 'gauge',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            gauge: {
                label: {
                    format: function (value, ratio) {
                        return value;
                    },
                    show: false // to turn off the min/max labels.
                },
                min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
                max: 14, // 100 is default
                units: '',
                //    width: 39 // for adjusting arc thickness
            },
            color: {
                pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
                threshold: {
                    unit: 'value', // percentage is default
                    max: 14, // 100 is default
                    values: [5.5, 5.8, 6.4, 6.7]
                }
            },
            size: {
                height: 180
            }
        });


        var chart3 = c3.generate({
            bindto: '#chart3',
            data: {
                x: 'x',
                columns: [
                    ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
                    ['data1', 30, 200, 100, 400, 150, 250]
                ]
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: '%Y-%m-%d'
                    }
                }
            }
        });

        setTimeout(function () {
            var len1 = Math.random() * 8 + 2;
            var data = ["data1"];
            while (len1 > 0) {
                data.push(Math.random() * 1000);
                len1--;
            }

            var lowRand = Math.random() * 2 + 4.8;
            chart1.load({
                columns: [
                    data
                ]
            });
            chart2.load({
                columns: [['data', lowRand.toFixed(2)]]
            });
            chart3.load({
                columns: [
                    data
                ]
            });
        }, 100);

        setInterval(function () {
            var len1 = Math.random() * 8 + 2;
            var data = ["data1"];
            while (len1 > 0) {
                data.push(Math.random() * 1000);
                len1--;
            }

            var lowRand = Math.random() * 2 + 4.8;
            chart1.load({
                columns: [
                    data
                ]
            });
            chart2.load({
                columns: [['data', lowRand.toFixed(2)]]
            });
            chart3.load({
                columns: [
                    data
                ]
            });
        }, 10000);
    }

    return {
        render: render
    }

}());
