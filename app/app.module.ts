/// reference path="../typings/globals/jquery/index.d.ts";
/// reference path="../typings/globals/angular/index.d.ts";

namespace app {
    var app = angular.module('app', ['ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMaterial',
        ]);
    // var app = angular.module('app');
        app.config(function ($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
    })
    .otherwise({
        redirectTo: '/'
    });
});

}
