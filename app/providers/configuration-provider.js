app.factory('configurationProvider', function($http) { 

    var isGalleryInitialized = false;
    var galleryConfiguration = null;
    var contentConfiguration = null;
    
    var galleryPromise = $http.get('app/configuration/gallery.json')
        .then(function(response) {
            galleryConfiguration = response.data;
        });
    
    var contentPromise = $http.get('app/configuration/content.json')
        .then(function(response) {
            contentConfiguration = response.data;
        });

    return {
        galleryPromise: galleryPromise,
        contentPromise: contentPromise,
        getGalleryConfiguration: function() {
            if (!isGalleryInitialized) { 
                var config = galleryConfiguration['gallery-content'];
                var baseUrl = galleryConfiguration['base-gallery-url']

                config.forEach(function(set) {
                    set.images.forEach(function(part, index, images) {
                        images[index] = baseUrl + '/' + part;
                    });
                }, this);

                isGalleryInitialized = true;
            }
            return galleryConfiguration;
        },
        getContentConfiguration: function () {
            return contentConfiguration;
        }
    } 
});