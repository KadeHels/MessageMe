var homeApp = angular.module('homeApp', []);

//Data connection

homeApp.controller('homeController', ['$scope', function ($scope) {
    $scope.names = ['Kirby Pucket', 'Babe Ruth', 'That Yankee guy'];
}])