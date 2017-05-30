(function () {
    'use strict';
    angular
        .module('app')
        .config(appConfig);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function appConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/users/home.html',
                controller: 'HomeController as hvm'
            })
            .state('home.repos', {
                url: '/users/:id/repos',
                params: {
                    id: null
                },
                templateUrl: 'app/users/repos.html',
                controller: 'ReposController as rvm'
            });
    }
})();