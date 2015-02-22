/**
 * Created by Vadym on 15/10/14.
 */
angular.module('HumidityService', []).factory('Humidity', ['$http', function ($http) {
    return {
        get : function () {
            return $http.get('/api/humidity');
        }
    }
}]);