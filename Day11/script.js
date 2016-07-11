var app = angular.module('moviesApp', ['ngRoute']); 

app.config(function($routeProvider) {
	$routeProvider.when('/', { 
		controller: 'MainCtrl', 
		templateUrl: 'templates/home.html',
	})
	$routeProvider.when('/movie/:movieId', { 
		controller: 'SingleCtrl',
		templateUrl: 'templates/single-movie.html',
	})
	$routeProvider.when('/movie/:movieId', { 
		controller: 'GiphyCtrl',
		templateUrl: 'templates/single-movie.html',
	})

	
});

app.controller('MainCtrl', function ($scope, $http) { 
	$scope.searchMovies = function() {	
		$http({
			url: "http://www.omdbapi.com/?",
			method: "GET", 
			params: { 
				s: $scope.search
			}
		
		}).then(function(response){ 
			console.log(response);
			$scope.movieArray = response.data.Search;
		

		})
	}
});


app.controller('SingleCtrl', function ($scope, $http, $routeParams) { 
	$http({
		url: "http://www.omdbapi.com/?",
		method: "GET", 
		params: { 
			i: $routeParams.movieId
		}
	
	}).then(function(response){ 
		console.log(response);
		$scope.movie = response.data;
	

	})


});


app.controller('GiphyCtrl', function($scope, $http) { 
	$http({
		url: 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC',
		method: 'GET', 
		params: { 
			
		}



	})



)};