(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .directive('roStatus', roStatus);


    function roStatus() {
        var directive = {
            restrict: 'AE',
            link: linkFunc,
            templateUrl: "app/components/ro-status/ro-status.tmpl.html",
            replace: true,
            controller: RoStatusCtrl,
            controllerAs: 'vm'
        };
        return directive;
    }

    function linkFunc(scope, element, attrs, ctrl) {


    }
    RoStatusCtrl.$inject = ['$scope', '$http'];

    function RoStatusCtrl($scope, $http) {
        //Controller code 
        //Client-side pagination example
        $scope.currentPage = 0;
        $scope.pageSize = 5;
        $scope.totalPages = 0;
        $scope.pagedData = [];

        $scope.filterOptions = {
            stores: [{
                    id: 1,
                    city: 'All'
                },
                {
                    id: 2,
                    city: 'Mumbai'
                },
                {
                    id: 3,
                    city: 'Pune'
                }
            ]
        };
        $scope.status = {
            statusValue: [{
                    id: 1,
                    value: 'All'
                },
                {
                    id: 2,
                    value: 'PG_CANCELLED'
                },
                {
                    id: 3,
                    value: 'CONSUMER_CANCELLED'
                },
                {
                    id: 4,
                    value: 'PENDING'
                },
                {
                    id: 5,
                    value: 'ARTIST_REJECTED'
                },
                {
                    id: 6,
                    value: 'COMPLETED'
                },
                {
                    id: 7,
                    value: 'UNASSIGNED'
                }
            ]
        };

        //Mapped to the model to filter
        $scope.filterItem = {
            store: $scope.filterOptions.stores[0]

        };
        $scope.statusFilterSelected = {
            status: $scope.status.statusValue[0]
        };

        $scope.statusFilter = function(data) {
            console.log("statusFilter", data);
            console.log("$scope.statusFilter.status", $scope.statusFilterSelected.status);
            console.log("data.appointment.status", data.appointment.status);
            if (data.appointment.status === $scope.statusFilterSelected.status.value) {
                return true;
            } else if ($scope.statusFilterSelected.status.value === 'All') {
                return true;
            } else {
                return false;
            }
        };
        $scope.customFilter = function(data) {
            console.log("data", data);
            if (data.appointment.city.name === $scope.filterItem.store.city) {
                return true;
            } else if ($scope.filterItem.store.city === 'All') {
                return true;
            } else {
                return false;
            }
        };


        $scope.pageButtonDisabled = function(dir) {
            if (dir === -1) {
                return $scope.currentPage === 0;
            }
            return $scope.currentPage >= $scope.data1.length / $scope.pageSize - 1;
        };

        $scope.paginate = function(nextPrevMultiplier) {
            $scope.currentPage += (nextPrevMultiplier * 1);
            $scope.pagedData = $scope.data1.slice($scope.currentPage * $scope.pageSize);
        };

        $scope.getService = function(sub) {

            angular.forEach(sub, function(value, key) {
                angular.forEach(value.services, function(value, key) {
                    $scope.serviceName = value.name;
                });

            });
            return $scope.serviceName;
        };

        function init() {
            $http.get('app/data/test.json')
                .success(function(data) {
                    $scope.data1 = data.appointments;
                    $scope.totalPages = Math.ceil($scope.data1.length / $scope.pageSize);
                    $scope.pagedData = $scope.data1;
                });
        }

        init();

    }


})();
