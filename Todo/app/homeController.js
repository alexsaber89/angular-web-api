(function () {
    //one way to minify correctly
    angular.module("todo")
        .controller("homeController", ["$scope", function ($scope) {
            $scope.welcome = "Hello, world";
        }]);
})();