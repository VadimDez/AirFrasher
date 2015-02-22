/**
 * Created by Vadym on 25/01/15.
 */
"use strict";

angular.module('MainCtrl', ['TemperatureService', 'HumidityService']).controller('MainController', ['$scope', 'Temperature', 'Humidity', function ($scope, Temperature, Humidity) {
    $scope.show = 'charts';

    $scope.temperatureSensor2Options = {
        axes: {
            x: {key: 'x', labelFunction: function(value) {return value;}, type: 'linear', min: 0, max: 10, ticks: 2}//,
        },
        series: [
            {y: 'value', color: 'steelblue', thickness: '2px', type: 'area', striped: true, label: 'Temperature 2'}//,
        ],
        lineMode: 'linear',
        tension: 0.7,
        tooltip: {mode: 'scrubber', formatter: function(x, y, series) {return 'Temperature 2';}},
        drawLegend: true,
        drawDots: true,
        columnsHGap: 5
    };


    $scope.temperature1Options = {
        axes: {
            x: {key: 'x', labelFunction: function(value) {return value;}, type: 'linear', min: 0, max: 10, ticks: 2}//,
            //x2: {key: 'x2', labelFunction: function(value) {return value;}, type: 'linear', min: 0, max: 10, ticks: 2}//,
            //y: {type: 'linear', min: 0, max: 1, ticks: 5}//,
            //y2: {type: 'linear', min: 0, max: 1, ticks: [1, 2, 3, 4]}
        },
        series: [
            {y: 'value', color: 'steelblue', thickness: '2px', type: 'area', striped: true, label: 'Temperature'}//,
            //{y2: 'value', color: 'red', thickness: '2px', type: 'area', striped: true, label: 'Temperature'}
            //{y: 'otherValue', axis: 'y2', color: 'lightsteelblue', visible: false, drawDots: true, dotSize: 2}
        ],
        lineMode: 'linear',
        tension: 0.7,
        tooltip: {mode: 'scrubber', formatter: function(x, y, series) {return 'Temperature';}},
        drawLegend: true,
        drawDots: true,
        columnsHGap: 5
    };

    $scope.humidityOptions = {
        axes: {
            x: {key: 'x', labelFunction: function(value) {return value;}, type: 'linear', min: 0, max: 10, ticks: 2}
        },
        series: [
            {y: 'value', color: 'steelblue', thickness: '2px', type: 'area', striped: true, label: 'Humidity'}
        ],
        lineMode: 'linear',
        tension: 0.7,
        tooltip: {mode: 'scrubber', formatter: function(x, y, series) {return 'Humidity';}},
        drawLegend: true,
        drawDots: true,
        columnsHGap: 5
    };


    Temperature.getSensor1().success(function (data) {
        $scope.temperature1 = makeDataArray(data);

    });



    Temperature.getSensor2().success(function (data) {
        $scope.temperatureSensor2 = makeDataArray(data);
    });



    Humidity.get().success(function (data) {
        $scope.humidity = makeDataArray(data);
    });


    $scope.showPath = function (path) {
        $scope.show = path;
    };
    
    // functions
    
    function makeDataArray(data) {
        var array = [],
            length = data.length;

        for(var i =0; i < length; i++) {
            array.push({x: i, value: data[i].value / 92});
        }

        return array;
    }
}]);