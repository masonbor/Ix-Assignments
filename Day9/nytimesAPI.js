var app = angular.module('NYTimesApi', []); 

var NY_TIMES_API_KEY = 'aeeb48ff36a94163914c7e2f01e75f8e';

app.controller('NYTCtrl', function($scope, $http) {
	$scope.search = function() {

		$http({
			url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
			method: 'GET', 
			params: { 
				'api-key': NY_TIMES_API_KEY,
				'q': $scope.searchBar		
			}

		}).then(function(response) {

			console.log(response);
			$scope.articles = response.data.response.docs;
		
		});

	}	
});