

var testApp = angular.module("makeModule", [])
    .controller("makeController", function ($scope, $http) {
    $http.get('http://localhost:56543/api/make').then(function (response) {
        debugger;
            $scope.make = response.data.item;
        });
    });