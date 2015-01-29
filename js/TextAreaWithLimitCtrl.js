(function () {
    'use strict';
    var app = angular.module('hello', []);
    app.controller("TextAreaWithLimitCtrl", function ($scope) {
        var MAX_LEN = 140,
            WARN_THRESHOLD = 20;
        $scope.remaining = function () {
            if ($scope.message) {
                return MAX_LEN - $scope.message.length;
            }
            else
                return MAX_LEN;
        };

        $scope.shouldWarn = function() {
          if($scope.remaining() <=0) {
              $scope.message = $scope.message.substr(0, 140);
          }
            return $scope.remaining() < WARN_THRESHOLD;
        };

        $scope.clear = function() {
            $scope.message = "";
        }
    });
}());