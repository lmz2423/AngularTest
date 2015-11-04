/**
 * Created by creditease on 2015/4/8.
 */

angular.module("MyModule", [])
    .controller('MyCtrl', ['$scope', function ($scope) {
        $scope.loadData = function () {
            console.log("����������");
        }
    }])
    .directive('loader', function () {
        return {
            restrict: 'ae',
            link: function (scope, element, attr) {
                element.bind('mouseenter', function () {
                    scope.$apply("loadData()");
                });
            }
        }
    });