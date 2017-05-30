(function() {
'use strict';

    angular
        .module('app.users')
        .controller('ReposController', ReposController);

    ReposController.$inject = ['$log'];
    function ReposController($log) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();