var app;
(function (app_1) {
    var app = angular.module('app', ['ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMaterial',
    ]);
    app.config(function ($routeProvider) {
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
})(app || (app = {}));
//# sourceMappingURL=app.module.js.map