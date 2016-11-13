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
        var self = this, j = 0, counter = 0;
        self.mode = 'query';
        self.activated = true;
        self.determinateValue = 30;
        self.determinateValue2 = 30;
        self.showList = [];
        self.toggleActivation = function () {
            if (!self.activated)
                self.showList = [];
            if (self.activated) {
                j = counter = 0;
                self.determinateValue = 30;
                self.determinateValue2 = 30;
            }
        };
        $interval(function () {
            self.determinateValue += 1;
            self.determinateValue2 += 1.5;
            if (self.determinateValue > 100)
                self.determinateValue = 30;
            if (self.determinateValue2 > 100)
                self.determinateValue2 = 30;
            if ((j < 2) && !self.showList[j] && self.activated) {
                self.showList[j] = true;
            }
            if (counter++ % 4 == 0)
                j++;
            if (j == 2)
                self.contained = "indeterminate";
        }, 100, 0, true);
        $interval(function () {
            self.mode = (self.mode == 'query' ? 'determinate' : 'query');
        }, 7200, 0, true);
    });
})(app || (app = {}));
//# sourceMappingURL=mainCtrl.js.map