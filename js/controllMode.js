/**
 * Created by creditease on 2014/7/31.
 */
var myAppModule = angular.module('myApp',[]);

myAppModule.controller('TextController',function($scope){
    var someText = {};
    someText.message = "You have started your journey.";
    $scope.someText = someText;
});
myAppModule.controller('SomeController',function($scope){
    $scope.youCheckedIt = false;
});

myAppModule.controller('startUpController',function($scope){
    $scope.funding = {startingEstimate: 0}

    computeNeeded = function(){
        alert("xx");
        if($scope.funding.startingEstimate >12){
            $scope.needed ="请输入小于12的数值";
        }
        else
        $scope.needed = $scope.funding.startingEstimate *10;
    };
    $scope.$watch('funding.startingEstimate', computeNeeded);
});
