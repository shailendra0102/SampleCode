(function(){
	angular.module('myApp')

	.config(configFunction);

	configFunction.$inject=['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider'];

	function configFunction($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider){
		$httpProvider.interceptors.push('loaderInterceptor');
    	$urlRouterProvider.otherwise('/login');

    	$stateProvider
        
	        // HOME STATES AND NESTED VIEWS ========================================
	        .state('login', {
	            url: '/login',
	            templateUrl: 'app/modules/login/partials/login.html',
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
	}
})();