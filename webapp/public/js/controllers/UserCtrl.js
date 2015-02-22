/**
 * Created by Vadym on 15/10/14.
 */
"use strict";

angular.module('UserCtrl', ['UserService']).controller('UserController', function ($scope, User) {

    $scope.tagline = 'Nothing beats a pocket protector!';

    User.get().success(function (data) {
        $scope.nerds = data;
    });

    $scope.create = function () {
        User.create({name: $scope.new.name, age: $scope.new.age}).success(function (data) {
            $scope.nerds = data;
            $scope.new.name = '';
            $scope.new.age  = 0;
        });
    };

    $scope.delete = function (id) {
        User.delete(id).success(function (data) {
            $scope.nerds = data;
        });
    };

    $scope.update = function (id, newData) {
        User.update(id, newData).success(function (data) {

        });
    };
});