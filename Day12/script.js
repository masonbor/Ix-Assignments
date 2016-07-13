var app = angular.module("chommiesApp", ["ngRoute"]);

app.config(function($routeProvider) { 
	$routeProvider.when('/', {
		controller: 'FeedCtrl',
		templateUrl: '/templates/FeedCtrl.html'
	
	})
	$routeProvider.when('/mePage',{
		controller: 'MePageCtrl',
		templateUrl: '/templates/mePage.html'

	})

});

app.controller('FeedCtrl', function($scope, $http) {
	$scope.isSending = false;

	$http({ 
		url: "http://ixchommies.herokuapp.com/props",
		method: "GET",
		params: { 
			'token':'b7c6ab29ff30cb3063bb7e38aaa1de0e'
		}

	}).then(function(response) { 
		console.log(response);
		$scope.props = response.data;
	})

	$http({ 
		url: "http://ixchommies.herokuapp.com/brus",
		method: "GET",
		params: { 
			'token':'b7c6ab29ff30cb3063bb7e38aaa1de0e'
		}

	}).then(function(response){ 
		console.log(response);
		$scope.brus = response.data;
		
	})	

	$scope.sendProps = function() { 
		$scope.errorMessage = "";
		$scope.isSending = true;

		$http({ 
		url: "http://ixchommies.herokuapp.com/props",
		method: "POST",
		params: { 
			'token':'b7c6ab29ff30cb3063bb7e38aaa1de0e',
	
		},
		data: { 
			'for': $scope.selectedBru,
			'props': $scope.newPropsValue
		}

	}).then(function(response) { 
		console.log(response); 
		$scope.props.unshift(response.data);
        $scope.newPropsValue = "";
        $scope.selectedBru = "";
		
	}).catch(function(response){ 
		console.log(response);
		$scope.errorMessage = response.data.message;


	}).finally(function(response) { 
		$scope.isSending = false;
	})
	

	}

});

app.controller('MePageCtrl', function($scope, $http) { 
	$http({ 
		url: "http://ixchommies.herokuapp.com/props/me",
		method: "GET",
		params: { 
			'token':'b7c6ab29ff30cb3063bb7e38aaa1de0e'
		}

	}).then(function(response) { 
		console.log(response);
		$scope.myProps = response.data;

	})


});












