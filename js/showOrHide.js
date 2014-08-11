/**
 * Created by creditease on 2014/8/5.
 */
function DeathrayMenuController($scope) {
    $scope.isDisabled = false;
    $scope.show = false;
    $scope.toggleMenu = function() {
        $scope.show = !$scope.show;
    };

    $scope.stun = function(){
        $scope.isDisabled = !$scope.isDisabled;
    }
}