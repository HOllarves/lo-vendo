;
(function () {
    "use strict";

    angular.module('LoVendoApp.directives')
        .directive('sideMenuBox', function () {
            return {
                restrict: 'E',
                templateUrl: './modules/layout/navbar/side-menu-box.html',
            }
        })

})();