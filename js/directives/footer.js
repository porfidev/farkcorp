/**
 * Created by elporfirio on 31/05/15.
 */
angular.module('FarkCorp')
    .directive('footer', function(){
        return {
            //replace: true,
            restrict: "E",
            templateUrl: "templates/directives/footer.html"
        }
    });