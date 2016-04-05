angular.module('angularTestApp',['ngRoute'])
	.config(["$routeProvider", function ($routeProvider) {
		$routeProvider
		.when('/', {
			controller: 'HomeCtrl',
			templateUrl: 'partials/home.html'
		})
		.when('/categories/:category', {
			controller: 'CategoryCtrl',
			templateUrl: 'partials/category.html'
		})
		.otherwise({
			redirectTo: '/'
		});
	}]);
