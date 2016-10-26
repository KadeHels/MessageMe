var homeApp = angular.module('homeApp', []);



homeApp.controller('homeController', ['$scope', function ($scope) {
    $scope.names = ['Kirby Pucket', 'Babe Ruth', 'That Yankee guy'];
}])