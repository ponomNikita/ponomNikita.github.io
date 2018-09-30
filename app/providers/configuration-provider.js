app.factory('configurationProvider', function($http) { 
    var galleryConfiguration = null;
    
    var promise = $http.get('app/configuration/gallery.json')
        .then(function(response) {
            galleryConfiguration = response.data;
        });

    return {
        promise: promise,
        getGalleryConfiguration: function() {
            
            var config = galleryConfiguration['gallery-content'];
            var baseUrl = galleryConfiguration['base-gallery-url']

            config.forEach(function(set) {
                set.images.forEach(function(part, index, images) {
                    images[index] = baseUrl + '/' + part;
                });
            }, this);

            return galleryConfiguration;
        }    
    } 
});