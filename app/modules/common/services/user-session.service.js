(function(){
	angular.module('myApp.Common')
	.service('UserSession',userSession);

	userSession.$inject=['$window'];
	
	function userSession($window){
		this.createSession=function(data,type){
			data.issuedAt=new Date().getTime() / 1000;
		    data.expiresAt=data.issuedAt+data.expires_in;
		    data.AuthType=type;
			$window.localStorage.setItem('session',angular.toJson(data));
		};

		this.getSession=function(){
			return angular.fromJson($window.localStorage.getItem('session'));
		};

		this.validateSession=function(){

		}
	}
})();