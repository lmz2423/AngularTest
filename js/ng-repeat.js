/**
 * Created by creditease on 2014/8/1.
 */
var students = [
    {
        name:'Mary Contrary',id:'1'
    },
    {
        name:'Jack Sprat',id:'2'
    },
    {
        name:'Jill Hill',id:'3'
    }
];

var myApp = angular.module('myrepeat',[]);
myApp.controller('studentListController',function($scope){
    $scope.students  = students;
    $scope.insertTom = function(){
        $scope.students.splice(1,0,{name:'Tom Thumb'})
    }
});
