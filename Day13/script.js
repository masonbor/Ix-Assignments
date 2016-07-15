var app = angular.module('tensionApp', ['ngRoute', 'firebase']);

app.run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireSignIn promise is rejected
    // and redirect the user back to the home page
    if (error === "AUTH_REQUIRED") {
      $location.path("/login");
    }
  });
}]);

app.config(function($routeProvider) { 
	$routeProvider.when('/', { 
		controller: 'HomeCtrl',
		templateUrl: '/templates/home.html'
	
	})
	$routeProvider.when('/messagePage/:channel', { 
		controller: 'MessageCtrl',
		templateUrl: '/templates/messagePage.html',
		resolve: { 
			'currentAuth': function($firebaseAuth) {
			return $firebaseAuth().$requireSignIn();
		}
        }
	})
	$routeProvider.when('/signUp', { 
		controller: 'SignUpCtrl',
		templateUrl: '/templates/signUp.html'
	
	})
	$routeProvider.when('/login', { 
		controller: 'LoginCtrl',
		templateUrl: '/templates/login.html'
	})


});


app.controller('HomeCtrl', function($scope, $firebaseObject, $firebaseAuth) { 
	$scope.curUser = currentAuth;
	var ref = firebase.database().ref().child('channels');
	$scope.channels = $firebaseObject(ref);
	$scope.authObj = $firebaseAuth();




	//add new channel button in home.html

});

app.controller('MessageCtrl', function($scope, $routeParams, $firebaseArray){
	var ref = firebase.database().ref().child('messages').child($routeParams.channel);
	$scope.messages = $firebaseArray(ref);
	
	$scope.sendMessage = function () { 
		$scope.messages.$add({
			sender: $scope.userName, 
			text: $scope.newMessage, 
			created_at: Date.now()


		});
	};

});

app.controller('SignUpCtrl', function($scope, $routeParams, $firebaseArray, $firebaseAuth) { 
	$scope.authObj = $firebaseAuth();
	
	$scope.signUp = function() { 
		
		$scope.authObj.$createUserWithEmailAndPassword($scope.email, $scope.password)
		.then(function(firebaseUser) {
			console.log(firebaseUser);
			var userRef = firebase.database().ref().child('users').child(firebaseUser.uid);
			$scope.user = $firebaseArray(userRef);
			$scope.user.$add({ 
				name: $scope.name,
				email: $scope.email,
				password: $scope.password
			});
			window.location.assign('/login');
			
		}).catch(function(error) {
    		console.error("Error: ", error);
  		});
	}
	
});

app.controller('LoginCtrl', function($scope, $routeParams, $firebaseAuth) { 
	$scope.authObj = $firebaseAuth();

	$scope.login = function() { 
		
		$scope.authObj.$signInWithEmailAndPassword($scope.email, $scope.password)
		.then(function(firebaseUser) {
	 	console.log("Signed in as:", firebaseUser.uid);
	 	window.location.assign('/');

		}).catch(function(error) {
		console.error("Authentication failed:", error);
	
	})

	}

	//add new channel button in home.html

});





