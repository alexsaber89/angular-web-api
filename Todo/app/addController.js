(function () {
    //other way to minify correctly
    angular.module("todo")
        .controller("addController", addController);

    addController.$inject = ["$scope", "$http", "$location"];

    function addController($scope, $http, $location) {
        $scope.welcome = "addController";

        $scope.todo = {
            name: '',
            isComplete: false
        };

        $scope.submit = function (todo) {
            $http.post("/api/todo", todo)
                .then(function (res) {
                    $location.path("/list");
                })
        }
    }
})();