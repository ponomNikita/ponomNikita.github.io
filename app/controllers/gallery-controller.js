
app.controller("GalleryController", function($scope, $window, configurationProvider) {
    
    var configuration = configurationProvider.getGalleryConfiguration();
    $scope.gallery = configuration['gallery-content'];

});