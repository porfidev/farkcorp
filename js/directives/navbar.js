/**
 * Created by elporfirio on 31/05/15.
 */
angular.module('FarkCorp')
.directive('navigation', function(){
        return {
            //replace: true,
            restrict: "E",
            templateUrl: "templates/directives/navegacion.html"
        }
    });