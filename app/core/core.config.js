(function () {
    'use strict';
    angular
        .module('app.core')
        .config(configUrls);

    configUrls.$inject = ['$locationProvider'];
    function configUrls($locationProvider) {
        $locationProvider.html5Mode(true);
    }
})();