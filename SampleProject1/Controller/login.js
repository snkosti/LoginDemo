/// <reference path="../bower_components/angular/angular.js" />

angular.module('app', [])
    .controller('loginCtrl', function ($scope) {
        $scope.authenticate = function () {
            debugger;
            if($scope.UserName == 'nosql' && $scope.Password=='html5')
            {
                alert('Welcome to the site');
            }
            else
            {
                alert('Invalid');
            }
        }
    });