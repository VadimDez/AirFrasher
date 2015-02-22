/**
 * Created by Vadym on 25/01/15.
 */
"use strict";

angular.module('StateCtrl', ['TemperatureService']).controller('StateController', ['$scope', '$http', 'Temperature', function ($scope, $http, Temperature) {
    $scope.text = 'ON';
    $scope.state = true;

    $scope.turn = function() {

        $scope.text = ($scope.state) ? 'OFF' : 'ON';
        $scope.state = !$scope.state;


        //(function () {


            //setTimeout(function (){
            var a = '//10.10.60.4:5000/?port=1&value=' + (($scope.state) ? '0' : '1');
                $.ajax({
                    type: 'PUT',
                    //contentType: 'application/json',
                    url: a
                    //async: false,
                    //dataType: "jsonp"//,
                    //data: {port: 1, value: 1}

                }).success(function () {

                });
            //}, 1000);
        //})();
    }
}]);