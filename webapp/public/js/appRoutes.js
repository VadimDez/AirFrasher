/**
 * Created by Vadym on 15/10/14.
 */

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
        // home
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })
        .when('/temperature', {
            templateUrl: 'views/temperature.html',
            controller: 'TemperatureController'
        })
        .when('/humidity', {
            templateUrl: 'views/humidity.html',
            controller: 'HumidityController'
        })
        .when('/sensors', {
            templateUrl: 'views/sensors.html',
            controller: 'SensorsController'
        })
        .otherwise('/');

    $locationProvider.html5Mode(true);

}]).run(['$rootScope', '$location', function($rootScope, $location){
    var path = function() { return $location.path();};
    $rootScope.$watch(path, function(newVal, oldVal){
        $rootScope.activetab = newVal;
    });
}]);