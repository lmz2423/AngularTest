/**
 * Created by creditease on 2014/8/5.
 */
function DeathrayMenuController($scope) {
    $scope.show = false;
    $scope.toggleMenu = function() {
        $scope.show = !$scope.show;
    };
}