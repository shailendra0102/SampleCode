(function(){
	angular.module('myApp.Common')
	.directive("loader", ['$rootScope',function ($rootScope) {
	    return function ($scope, element, attrs) {
	        $scope.$on("loader_show", function () {
	        	console.log('loader show called');
	            return element.show();
	        });
	        return $scope.$on("loader_hide", function () {
	        	console.log('loader hide called');
	            return element.hide();
	        });
	    };
	}]);
})();