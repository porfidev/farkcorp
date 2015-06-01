/**
 * Created by elporfirio on 31/05/15.
 */
angular.module('FarkCorp')
.config(
    function($routeProvider){
        $routeProvider.when('/inicio',{
            templateUrl: 'templates/inicio.html'
        }).when(
            '/quienessomos', {
                templateUrl: 'templates/quienessomos.html'
            }
        ).when(
            '/catalogo', {
                templateUrl: 'templates/catalogo.html',
                controller: 'CatalogController',
                controllerAs: 'CatalogCtrl'
            }
        ).when(
            '/contacto',{
                templateUrl: 'templates/contacto.html'
            }
        ).otherwise(
            {
                redirectTo: '/inicio'
            }
        );
    }
);