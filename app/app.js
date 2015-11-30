(function(){
	angular.module('myApp',['ui.router','ngRoute'])

	.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

		console.log($locationProvider);

		$httpProvider.interceptors.push('httpInterceptor');
    
    	$urlRouterProvider.otherwise('/login');
    
    	$stateProvider
        
	        // HOME STATES AND NESTED VIEWS ========================================
	        .state('login', {
	            url: '/login',
	            templateUrl: 'partials/login.html',
	            controller:'loginCtrl'
	        })
	        
	        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
	        .state('about', {
	            // we'll get to this in a bit       
	        });

	    /*$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});*/
        
	})

	.factory('httpInterceptor', function ($q, $rootScope, $log) {

	    var numLoadings = 0;

	    return {
	        request: function (config) {
	            numLoadings++;
	            // Show loader
	            $rootScope.$broadcast("loader_show");
	            return config || $q.when(config)

	        },
	        response: function (response) {

	            if ((--numLoadings) === 0) {
	                // Hide loader
	                $rootScope.$broadcast("loader_hide");
	            }
	            return response || $q.when(response);

	        },
	        responseError: function (response) {
	            if (!(--numLoadings)) {
	                // Hide loader
	                $rootScope.$broadcast("loader_hide");
	            }
	            return $q.reject(response);
	        }
	    };
	})

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