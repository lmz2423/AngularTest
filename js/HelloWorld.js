/**
 * Created by creditease on 2015/1/20.
 */
var kk = {}

kk.HelloCtrl = function ($scope) {
    $scope.getName = function () {

        if (typeof this.name === "string" && this.name.length > 18) {
            return "你傻叉了吧！你还输入字";
        }
        return this.name;

    };
};

kk.WorldCtrl = function ($scope) {
    $scope.population = 7000;
    $scope.countries = [{name: 'France', population: 63.1},
        {name: 'United Kingdom', population: 61.8}
    ];
    $scope.worldPercentage = function(countryPopulation){
        return (countryPopulation / $scope.population) *100;
    };
};