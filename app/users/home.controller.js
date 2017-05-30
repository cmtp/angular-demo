(function() {
'use strict';

    angular
        .module('app.users')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$log'];
    function HomeController($log) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();