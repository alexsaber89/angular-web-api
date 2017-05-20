(function () {
    //other way to minify correctly
    angular.module("todo")
        .controller("detailController", detailController);

    detailController.$inject = ["$scope"];
    function detailController($scope) {
        $scope.welcome = "detailController";
    }
})();