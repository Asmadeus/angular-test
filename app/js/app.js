angular.module('angularTestApp',['ngRoute'])
	.config(["$routeProvider", function ($routeProvider) {
		$routeProvider
		.when('/', {
			controller: 'HomeCtrl',
			templateUrl: 'partials/home.html'
		})
		.otherwise({
			redirectTo: '/'
		});
	}]);
