
app.controller("ContentController", function($scope, $window, configurationProvider) {

    var configuration = configurationProvider.getContentConfiguration();

    $scope.maincontent = [
        {
            image: "static/images/Set1_3.jpg"
        },
        {
            image: "static/images/Set2_2.jpg"
        },
        {
            image: "static/images/Set4_1.jpg"
        },
    ];

    if (configuration != null) {
        $scope.aboutme = configuration['aboutme'];
        $scope.contacts = configuration['contacts'];
        $scope.plates = configuration['plates']
    }    


    $('.navigation').removeClass('navigation-fixed')
});