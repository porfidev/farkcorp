/**
 * Created by elporfirio on 31/05/15.
 */
angular.module('FarkCorp')
.controller('CatalogController', [
        'Catalog',
        function(Catalog){
            "use strict";
            var ctrl = this;

            ctrl.catalos = null;
            ctrl.selected = null;
            ctrl.collecion = null;

            ctrl.renderMenu = function(){
                ctrl.catalos = Catalog.getFileCatalog('catalogo.json');
                ctrl.catalos.success(function(data, status, headers, config){
                    ctrl.catalos = data;
                    console.info(ctrl.catalos);
                    ctrl.selected = ctrl.catalos[0].productos;
                    ctrl.selected.title = ctrl.catalos[0].familia;

                    ctrl.collecion = ctrl.catalos;
                }).error(function(data, status, headers, config){
                    console.error(data);
                    console.error(status);
                });

            };

            ctrl.select = function(index){
                ctrl.selected = ctrl.catalos[index].productos;
                ctrl.selected.title = ctrl.catalos[index].familia;
            };

            ctrl.renderMenu();
        }
    ]);