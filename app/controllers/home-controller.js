
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

    $scope.sliderImages =[
        'static/images/img1.jpg',
        'static/images/img2.jpg',
        'static/images/img3.jpg'
    ];

    $scope.goto = function(path) {
        $location.path(path);
    };
});