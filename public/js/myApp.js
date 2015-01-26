/**
 * Created by una on 1/12/15.
 */
var myApp = angular.module('myApp', ['wallopSlider', 'formControl']);
angular.module('wallopSlider');

angular.module('myApp')


.controller('myController', ['$scope', '$http', function ($scope, $http) {

    $http.get('/data/itemInfo.json').success(function(data, success) {
           $scope.items = data.items;
           $scope.items.forEach(function(item) {
               console.log(item);
           })
       }
   );
    $scope.currentSliderIndex = 0;
    $scope.updateTsPrevious = function() {
        $scope.tsPrevious = +new Date();
    };
    $scope.updateTsNext = function() {
        $scope.tsNext = +new Date();
    };

}])


.directive('row', function() {
    return {
        restrict: 'E',
        templateUrl: './templates/row.html'
    }


});
