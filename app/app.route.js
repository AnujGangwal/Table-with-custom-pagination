(function() {
    'use strict';

    angular.module('app')

        .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/bookings', {
                    templateUrl: 'app/screens/dashboard/dashboard.tmpl.html',
                    controller: 'DashboardCtrl',
                    controllerAs: 'vm'
                })
                .otherwise({
                    redirectTo: '/bookings'
                });

        }]);
})();
