
app.controller("HomeController", function($scope, $location) {
    $scope.modules = {
        header: {
            visable: true
        },
        navigation: {
            visable: true
        },
        content: {
            visable: true
        },
        footer: {
            visable: true
        },
    };

    $scope.goto = function(path) {
        $location.path(path);
    };
});