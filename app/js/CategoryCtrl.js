angular.module('angularTestApp')
	.controller('CategoryCtrl',['$scope','projects','$routeParams', function ($scope, projects, $routeParams) {
		// console.log($routeParams);
		projects.success(function (data) {
			var categoryName = $routeParams.category;
			var allProjects = data;
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

			var projectsByCategory = [];
			for (var i = 0; i < allProjects.length; i++) {
				var p = allProjects[i];
				for (var j = 0; j < p.tags.length; j++) {
					if (p.tags[j] === categoryName) {
						projectsByCategory.push(p);
					}
				}
			}

			$scope.category = {
				name: allCategories[categoryName].name,
				sites: projectsByCategory,
				slug: categoryName
			}
		});
	}]);
