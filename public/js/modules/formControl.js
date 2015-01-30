angular.module('formControl', [])
    .directive('fileInput', ['$parse', function($parse) {
        return {
            restrict: 'A',
            link: function(scope, elm, attrs){
                elm.bind('change', function() {
                    $parse(attrs.fileInput)
                    .assign(scope, elm[0].files);
                    scope.$apply()
                })
            }
        }
    } ])
.controller('formControl', ['$scope', '$http', function($scope, $http) { // re-add part for title and description
        $scope.filesChanged = function(elm) {
            $scope.files = elm.files;
            $scope.$apply();
        };
        $scope.submit = function(form, validity) {
            if($scope.files === undefined) {
                alert("You must select at least 1 file!")
            }
            else if (validity) {
                var fd = new FormData();
                fd.append('title', form.title);
                fd.append('description', form.description);
                fd.append('isRefrig', form.refrigerated || true);
                fd.append('price', form.price);
                angular.forEach($scope.files, function (file) {
                    fd.append('file', file)
                });
                $http.post('/upload', fd,
                    {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                    }
                )
                    .success(function (d) {
                        console.log(d);
                    })
            }
        };
    //$scope.submit = function(formData, validity) {
            //$http.post('/upload', formData); // title and description are being posted, but not files.
            //if(validity) {
            //    alert("Submitting" + JSON.stringify(formData));
            //}
        //};

    }]
);

