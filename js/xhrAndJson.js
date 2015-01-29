/**
 * Created by creditease on 2015/1/23.
 */
(function () {
    'use strict';
    var app = angular.module('xhrJson', []);
    app.controller('PhoneListCtrl', function ($scope, $http) {
        $http.get('../data/phoneEmail.json').success(function (data) {
            $scope.phone = data;
        });
        $scope.orderProp = 'age';
    });
}());