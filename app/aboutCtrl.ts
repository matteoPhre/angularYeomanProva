
namespace app {
    var app = angular.module('app');

  app.controller('MainController', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.currentNavItem = 'page1';

    $scope.data = {
      group1 : 'Banana',
      group2 : '2',
      group3 : 'avatar-1'
    };
  });
}