
app.directive('goTo', [ '$location', function(location) {                                                      
    return {                                                                                 
        restrict: 'A',                                                                       
        scope: {                                                                             
            scrollTo: "@",
            redirectTo: "@"                                                           
        },                                                                                   
        link: function(scope, $elm, attr) {                                                   

            $elm.on('click', function() { 
                if (typeof scope.redirectTo !== 'undefined') {
                    scope.$apply(function(){                                            
                        location.path(scope.redirectTo);
                    }); 

                    if (scope.redirectTo == '/'){
                        //InitializeComments();
                    }
                }

                if (typeof scope.scrollTo !== 'undefined') {
                    $('html,body').animate({scrollTop: $(scope.scrollTo).offset().top }, "slow");
                }
            });                                                                              
        }                                                                                    
    }}]); 