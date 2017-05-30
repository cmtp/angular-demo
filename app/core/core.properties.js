/**
 * @author ctola
 */
(function () {
    'use strict';
    angular
        .module('app.core')
        .config(Properties);
    Properties.$inject = ['$translateProvider'];

    function Properties($translateProvider) {
        $translateProvider.translations('en',translations);
        $translateProvider.translations('es', translations_es);
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('escape');
    }

    // en
    var translations = {
        'HELLO':'hello',
        'WORLD':'world',
    };
    var translations_es = {
        'HELLO':'hola',
        'WORLD':'mundo'
    };
})();