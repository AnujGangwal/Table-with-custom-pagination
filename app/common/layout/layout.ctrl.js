(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('LayoutCtrl', LayoutCtrl);

    LayoutCtrl.$inject = ['$scope', '$q'];

    function LayoutCtrl($scope, $q) {

        var vm = this;

        activate();

        function activate() {
            //statements
        }

    }
})();
