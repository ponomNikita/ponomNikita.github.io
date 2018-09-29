

app.directive('carouselOnClick', function($uibModal) {                                                      
    return {                                                                                 
        restrict: 'A',                                                                       
        scope: {                                                                             
            images: "="                                                           
        },                                                                                   
        link: function(scope, $elm, attr) {

            $elm.on('click', function() { 
                var modalInstance =  $uibModal.open({
                    templateUrl: "app/views/carousel.html",
                    constroller: 'CarouselController',
                    scope: scope,
                    windowClass: 'carousel-modal-window',
                    size: 'lg'
                });

                modalInstance.result.then(
                function () {},
                function () {
                    console.log('Modal dismissed at: ' + new Date());
                });
            });                                                                              
        }                                                                                    
    }}); 

app.controller('CarouselController', function($scope) {

});