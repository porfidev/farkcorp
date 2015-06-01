/**
 * Created by elporfirio on 31/05/15.
 */
angular.module('FarkCorp')
.factory('Catalog', [
        '$http',
        function CatalogFactory($http){
            "use strict";
            return {
                catalogs: null,
                getFileCatalog: function(fileurl){
                    return $http.get(fileurl);
                },
                getCatalogs: function(){
                    var self = this;
                    return self.catalogs;
                }
            };
        }
    ]);