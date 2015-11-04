/**
 * Created by creditease on 2015/4/10.
 */
angular.module('myApp', [])
    .controller('myCtrl', function ($scope) {
        $scope.name = "luomingzhong";
        $scope.bill = "dollar";
    })
    .directive('hello', function () {
        return {
            transclude: true,
            scope: {
                name:'='
            },
            template: '<div ng-transclude style="background-color: {{name}}"></div>'
        }
    });