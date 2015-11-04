/**
 * Created by creditease on 2015/4/10.
 */
angular.module('myApp', [])
    .controller('MainCtrl',function(){
        console.log('Something is wrong');
    })
    .directive('helloworld', function () {
        return {
            scope:{
                color:'=colorAttr'
            },
            restrict: 'AE',
            replace: 'true',
            template:'<p style="background-color: {{color}}">Hello World</p>',
            link: function(scope, elem,attrs){
                elem.bind('click', function(){
                    elem.css('backgroud-color','white');
                    scope.$apply(function(){
                        scope.color = "white";
                    });
                });
                elem.bind('mouseover', function(){
                    elem.css('cursor', 'pointer');
                });

            }
        }
    });