/**
 * Created by luomingzhong on 2014/7/28.
 */
function HelloController($scope,$location){
    $scope.greeting = {text: 'Hello'};
    $location.$$hash = $scope.greeting.text;
}
