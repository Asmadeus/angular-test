angular.module('angularTestApp')
	.factory('projects',['$http', function ($http) {
		return $http.get('https://s3.amazonaws.com/madewithangular.com/projects.json')
			.success(function (data) {
				return data;
			})
			.error(function (data) {
				return data;
			})
	}]);
