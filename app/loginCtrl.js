(function(){
	angular.module('myApp')

	.controller('loginCtrl',ctrlFunction);

	ctrlFunction.$inject=['$scope','$window'];

	function ctrlFunction($scope,$window){
		$scope.gAuthenticate=function(){
			console.log('clicked');
			$window.location.href='https://accounts.google.com/o/oauth2/auth?scope=https://www.google.com/m8/feeds&redirect_uri=http://localhost/SampleCode/index.html&response_type=code&client_id=331458712343-2dppivhvgsikttjc2r8im7nk316dcai4.apps.googleusercontent.com';
		}
	}
})();