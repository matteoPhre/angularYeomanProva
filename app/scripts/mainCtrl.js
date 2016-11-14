var app;
(function (app_1) {
    var app = angular.module('app');
    app.controller('AboutController', function ($scope, $interval) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.title1 = 'Button';
        $scope.title4 = 'Warn';
        $scope.isDisabled = true;
        $scope.googleUrl = 'http://google.com';
    });
})(app || (app = {}));
//# sourceMappingURL=mainCtrl.js.map