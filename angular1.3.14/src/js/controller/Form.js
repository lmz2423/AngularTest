/**
 * Created by creditease on 2015/3/26.
 */
angular.module('UserInfoMoudle', ['ngRoute', 'ngAnimate'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/PageOne', {templateUrl: 'tpls/PageOne.html'})
            .when('/Default', {templateUrl: 'tpls/form.html'})
            .when('/PageTwo', {templateUrl: 'tpls/PageTwo.html'})

            .otherwise({redirectTo: '/Default'})
    });
angular.module('UserInfoMoudle').controller('UserCtrl', function ($scope,$location) {
    $scope.url = "http://10.106.2.111/kuaipan/Angular/angular1.3.14/src/index.html";
    $location.path("/PageOne");
});
angular.module('UserInfoMoudle').controller('UserInfoCtrl', function ($scope) {
    $scope.userInfo = {
        email: '727046672@qq.com',
        password: '2ksfjjdsj',
        autoLogin: 'true'
    };
    $scope.getUserInfo = function () {
        console.log(this.userInfo);
    };
    $scope.setFormData = function () {
        $scope.userInfo = {
            email: 'dlaldfja@gmail.com',
            password: 'fjadj',
            autoLogin: 'true'
        }
    };
    $scope.resetFormData = function () {
        $scope.userInfo = {
            email: '727046672@qq.com',
            password: '2ksfjjdsj',
            autoLogin: 'false'
        };
    }
});
angular.module('UserInfoMoudle').factory('myFactory', function ($http, $q) {
    var service = {};
    var baseUrl = 'http://www.baidu.com/';
    var _artist = '';
    var _finalUrl = '';

    var makeUrl = function () {
        _artist = _artist.split(' ').join('+');
        _finalUrl = baseUrl + _artist + 'xkskfak';
        return _finalUrl;
    }

    return service;
});