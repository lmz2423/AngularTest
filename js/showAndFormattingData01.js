/**
 * Created by creditease on 2015/2/11.
 */
(function () {
    'use strict';
    var app = angular.module("Controller", function () {
        console.log("xx");
    }).config(function ($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    });
}());