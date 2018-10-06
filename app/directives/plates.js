
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

    var addedCount = 0;
    for (var i = 0; i < columnCount; i++) {

        var countToAdd = columnSize;

        if (addedCount + columnSize * 2 > imagesCount) {
            countToAdd = imagesCount - addedCount;
        }

        $scope.columns.push({
            images:  $scope.images.slice(addedCount, addedCount + countToAdd)
        });

        addedCount += countToAdd;
    }
});
