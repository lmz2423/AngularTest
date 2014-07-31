/**
 * Created by creditease on 2014/7/31.
 */

var messages ={};
messages.someText = 'you have started your journey.';
function TextController($scope){
    $scope.message = messages;
}