/**
 * Created by Vadym on 15/10/14.
 */
angular.module('TemperatureService', []).factory('Temperature', ['$http', function ($http) {
    return {

        get : function () {
            return $http.get('/api/temperature');
        },
        getSensor1: function () {
            return $http.get('/api/temperature?limit=10&name=Sensor1');
        },
        getSensor2: function () {
            return $http.get('/api/temperature?limit=10&name=Sensor2');
        },
        turn: function ($val) {
            return $http.put('http://10.10.60.4:5000/?port=1&value=1', {port: 1, value: ($val) ? 1 : 0});
        }

        //create : function (userData) {
        //    return $http.post('/api/nerds', userData);
        //},
        //
        //delete : function (id) {
        //    return $http.delete('/api/nerds/'+ id);
        //},
        //
        //update : function (id, userData) {
        //    return $http.put('/api/nerds/' + id, userData);
        //},
        //
        //filtered : function () {
        //    return $http.get('/api/nerds/filtered');
        //}
    }
}]);