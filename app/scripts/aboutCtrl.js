var app;
(function (app_1) {
    var app = angular.module('app');
    app.controller('MainController', function ($scope, $mdDialog) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.currentNavItem = 'page1';
        $scope.data = {
            group1: 'Banana',
            group2: '2',
            group3: 'avatar-1'
        };
        $scope.customFullscreen = false;
        $scope.openFromLeft = function () {
            $mdDialog.show($mdDialog.alert()
                .clickOutsideToClose(true)
                .title('Opening from the left')
                .textContent('Closing to the right!')
                .ariaLabel('Left to right demo')
                .ok('Nice!')
                .openFrom('#left')
                .closeTo(angular.element(document.querySelector('#right'))));
        };
        $scope.showConfirm = function (ev) {
            var confirm = $mdDialog.confirm()
                .title('Would you like to delete your debt?')
                .textContent('All of the banks have agreed to forgive you your debts.')
                .ariaLabel('Lucky day')
                .targetEvent(ev)
                .ok('Please do it!')
                .cancel('Sounds like a scam');
            $mdDialog.show(confirm).then(function () {
                $scope.status = 'You decided to get rid of your debt.';
            }, function () {
                $scope.status = 'You decided to keep your debt.';
            });
        };
    });
})(app || (app = {}));
//# sourceMappingURL=aboutCtrl.js.map