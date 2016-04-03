angular.module('angularTestApp')
	.controller('HomeCtrl',['$scope','projects',function ($scope, projects) {
		projects.success(function (data) {
			$scope.allProjects = data;

			var allCategories = {
	      "google": {name: "By Google", sites: []},
	      "books-reference": {name: "Books & Reference", sites: []},
	      "business": {name: "Business", sites: []},
	      "communication": {name: "Communication", sites: []},
	      "education": {name: "Education", sites: []},
	      "entertainment": {name: "Entertainment", sites: []},
	      "finance": {name: "Finance", sites: []},
	      "health-fitness": {name: "Health & Fitness", sites: []},
	      "lifestyle": {name: "Lifestyle", sites: []},
	      "media-video": {name: "Media & Video", sites: []},
	      "music-audio": {name: "Music & Audio", sites: []},
	      "news-magazines": {name: "News & Magazines", sites: []},
	      "photography": {name: "Photography", sites: []},
	      "productivity": {name: "Productivity", sites: []},
	      "shopping": {name: "Shopping", sites: []},
	      "social": {name: "Social", sites: []},
	      "sports": {name: "Sports", sites: []},
	      "tools": {name: "Tools", sites: []},
	      "travel-local": {name: "Travel & Local", sites: []},
	      "transportation": {name: "Transportation", sites: []},
	      "weather": {name: "Weather", sites: []},
	      "community": {name: "From the Community", sites: []}
	    }

			for (var i = 0; i < $scope.allProjects.length; i++) {
				var p = $scope.allProjects[i];
				for (var j = 0; j < p.tags.length; j++) {
					allCategories[p.tags[j]].sites.push(p);
				}
			}

			$scope.allCategories = allCategories;

			for (var key in $scope.allCategories) {
				if ($scope.allCategories[key].sites.length === 0) {
					continue;
				}
				$scope.allCategories[key].featuredSite = $scope.allCategories[key].sites.slice(0,4);
			}
		});
	}]);
