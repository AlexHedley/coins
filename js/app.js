var myApp = angular.module('myApp', []);
myApp.controller('myController', function ($scope, $http, $q, $filter) {

    $scope.coins = [];

    $scope.init = function () {
        getData();
    }

    getData = () =>  {
        var file = 'data/coins.json';

        $http.get(file)
        .then(function(response) {
            $scope.coins = response.data.coins;
        });
    };

    $scope.init();
});