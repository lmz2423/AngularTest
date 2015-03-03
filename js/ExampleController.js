/**
 * Created by creditease on 2015/2/4.
 */
(function () {
    'use strict';
    angular.module('inputExample', [])
        .controller('ExampleCOntroller', ['$scope', function ($scope) {
            $scope.val = '1';
            this.isChange = function () {
                console.log("something is change");
            };
        }]);
}());