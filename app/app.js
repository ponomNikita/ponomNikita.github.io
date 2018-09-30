var app = angular.module("app", ["ngRoute", 'ui.bootstrap']);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "app/views/main.html",
            controller: "ContentController",
            resolve: {
                "PlatesConfigurationData": function (configurationProvider) {
                    return configurationProvider.contentPromise;
                }
            }
        })
        .when("/gallery", {
            templateUrl : "app/views/gallery.html",
            controller: "GalleryController",
            resolve: {
                "GalleryConfigurationData": function (configurationProvider) {
                    return configurationProvider.galleryPromise;
                }
            }
        });
});
