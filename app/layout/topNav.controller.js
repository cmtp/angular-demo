(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('TopNavController', TopNavController);

    TopNavController.$inject = ['$log'];
    function TopNavController($log) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();