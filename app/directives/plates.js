
app.directive('plates', function($uibModal) {                                                      
    return {                                                                                 
        restrict: 'E',                                                                       
        scope: {                                                                             
            images: "="                                                           
        },   
        templateUrl: 'app/views/plates.html',
        controller: 'PlatesController'                                                                  
    }}); 

app.controller('PlatesController', function($scope) {

    var imagesCount = $scope.images.length;
    var columnSize = imagesCount / 3;

    $scope.columns = [
        {
            images: $scope.images.slice(0, columnSize)
        },
        {
            images: $scope.images.slice(columnSize, columnSize * 2)
        },
        {
            images: $scope.images.slice(columnSize * 2, imagesCount)
        }
    ];
});
