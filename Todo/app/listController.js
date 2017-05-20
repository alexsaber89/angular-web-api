(function () {
    //other way to minify correctly
    angular.module("todo")
        .controller("listController", listController);

    listController.$inject = ["$scope", "$http"];

    function listController($scope, $http) {
        $scope.welcome = "listController";

        $scope.list = [];

        $http.get('/api/todo')
            .then(function (res) {
                console.log(res);
                $scope.list = res.data;
            });
    }
})();