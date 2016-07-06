var app = angular.module('groceryApp', []); 

app.controller('GroceryCtrl', function($scope) { 
	$scope.list = [];

	$scope.addGrocery = function() { 

		var newGrocery = { 
			name: $scope.item, 
			amount: $scope.quantity
		};
		$scope.list.push(newGrocery);
		$scope.item = "";
		$scope.quantity= "";
		console.log($scope.list);

	};

	$scope.addAmount = function(i) { 



	};

	$scope.subtractAmount = function() { 
		for (var p in $scope.list) {
			var newAmount = parseInt($scope.list[p].amount);
			newAmount = newAmount - 1;
			newAmount.toString();
			$scope.list[p].amount = newAmount;
		}

	};


});
