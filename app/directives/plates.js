
app.directive('plates', function($uibModal) {                                                      
    return {                                                                                 
        restrict: 'E',                                                                       
        scope: {                                                                             
            images: "="                                                           
        },   
        templateUrl: 'app/views/plates.html',
        controller: 'PlatesController'                                                                  
    }}); 

app.controller('PlatesController', function($scope, $window) {

    var windowWidth = $window.innerWidth;
    var columnCount = windowWidth > 800 ? 3 : 2;
    
    var imagesCount = $scope.images.length;
    var columnSize = imagesCount / columnCount;

    $scope.columns = [];

    for (var i = 0; i < columnCount; i++) {
        $scope.columns[i] = {
            images: []
        }
    }

    for (var i = 0; i < imagesCount; i++) {
        $scope.columns[i % columnCount].images.push($scope.images[i]);
    }

});
