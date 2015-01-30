/**
 * Created by una on 1/12/15.
 */
var myApp = angular.module('myApp', ['wallopSlider', 'formControl']);
angular.module('wallopSlider');

angular.module('myApp')


.controller('myController', ['$scope', '$http', function ($scope, $http) {

    $scope.selected = 'refrig';
    $http.get('/data/itemInfo.json').success(function(data, success) {
           $scope.items = data.items;
       }
   );
    $scope.itemDelete = function(title) {
            if(confirm("Are you sure you want to delete  " + title + " ?")) {
                $http.post('/deleteItem', {itemTitle: title});
                $http.get('/delete'); /* not working...because async??*/
            }
    };

    $scope.currentSliderIndex = 0;
    $scope.updateTsPrevious = function() {
        $scope.tsPrevious = +new Date();
    };
    $scope.updateTsNext = function() {
        $scope.tsNext = +new Date();
    };

}])

.controller('panelControl', ['$scope', function($scope) {
        $scope.isActive = true;
        $scope.setActive = function() {
            $scope.isActive = !$scope.isActive;
        }
}])
.directive('row', function() {
    return {
        restrict: 'E',
        templateUrl: './templates/row.html'
    }


});
