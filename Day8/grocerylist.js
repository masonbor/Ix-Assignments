var app = angular.module('groceryApp', []); 

app.controller('GroceryCtrl', function($scope) { 
	$scope.list = [];

	$scope.addGrocery = function() { 
		var isInList = false;
		for (var k = 0; k < $scope.list.length; k++){ 

			if ($scope.item === $scope.list[k].name) {

				$scope.list[k].amount += parseInt($scope.quantity);
				isInList = true;
			}


		}
		if (isInList === false){	
			var newGrocery = { 
				name: $scope.item, 
				amount: parseInt($scope.quantity)
			};
			$scope.list.push(newGrocery);
			
		}

		$scope.item = "";
		$scope.quantity= "";
	

	};

	$scope.addAmount = function(i) { 
		i.amount++;


	};

	$scope.subtractAmount = function(i) { 
		if (i.amount > 0) {
			i.amount--;
		}
	};


});
