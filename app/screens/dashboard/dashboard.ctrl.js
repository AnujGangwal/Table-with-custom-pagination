(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$scope', '$q'];

    function DashboardCtrl($scope, $q) {
        var vm = this;

        activate();

        function activate() {
            //statements
        }

    }
})();
