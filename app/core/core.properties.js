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
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('escape');
    }

    // en
    var translations = {
        'MORE':'More Users',
        'GIT':'Github Page',
        'REP': 'Repos',
        'REP_TITLE': 'Repositories',
        'USERS_TITLE': 'Users'
    };
})();