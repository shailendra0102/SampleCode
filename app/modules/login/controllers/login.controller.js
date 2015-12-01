(function(){
	angular.module('myApp.Login')

	.controller('loginCtrl',ctrlFunction);

	ctrlFunction.$inject=['$scope','$window','$location','UserSession'];

	function ctrlFunction($scope,$window,$location,UserSession){
		$scope.gAuthenticate=function(){
			console.log('clicked');
			$window.location.href='https://accounts.google.com/o/oauth2/auth?scope=https://www.google.com/m8/feeds https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.me&redirect_uri=http://localhost/SampleCode/index.html&response_type=code&client_id=331458712343-2dppivhvgsikttjc2r8im7nk316dcai4.apps.googleusercontent.com';
		}

		$scope.initialization=function(){
			if($location.absUrl().indexOf('code=')!=-1){
				var urlComponent=$location.absUrl().split('#')[0];
				var authorizationCode=urlComponent.split('=')[1];
				getToken(authorizationCode);
			}
		}

		function getToken(code){
			 $.ajax({
	            url: 'https://accounts.google.com/o/oauth2/token',
	            dataType: 'json',
	            type: 'POST',
	            contentType: 'application/x-www-form-urlencoded',
	            xhrFields: {
	                 withCredentials: true
	            },
	            crossDomain: true,
	            data: 'code='+code+'&client_id=331458712343-2dppivhvgsikttjc2r8im7nk316dcai4.apps.googleusercontent.com&client_secret=12gDabpa9vdx5vF9FFMlxX6j&redirect_uri=http://localhost/SampleCode/index.html&grant_type=authorization_code',
	            success: function( data, textStatus, jQxhr ){
	                UserSession.createSession(data,'googleAuth');
	            },
	            error: function( jqXhr, textStatus, errorThrown ){
	              console.log('Exception occurered');
	                //callBack(WORK_FLOW_CONSTANT.CAMPAIGN_ERROR);
	            }
	        });
		}
	}
})();