var app = angular.module('groceryApp', []); 

app.controller('GroceryCtrl', function($scope) { 
	$scope.list = [];

	$scope.addGrocery = function() { 
		var isInList = false;
		for (var k = 0; k < $scope.list.length; k++){ 

			if ($scope.item.toLowerCase() === $scope.list[k].name) {

				$scope.list[k].amount += parseInt($scope.quantity);
				isInList = true;
			}


		}
		if (isInList === false) {	
			if (isNaN($scope.item) === false) { 
				$scope.item = "";
				$scope.quantity = "";
				return;

			}

			if (isNaN($scope.quantity) === true) { 
				$scope.item = "";
				$scope.quantity = "";
				return;

			}


			var newGrocery = { 
				name: $scope.item.toLowerCase(), 
				amount: parseInt($scope.quantity),
				isEditing: false
			};
			$scope.list.push(newGrocery);
			
		}

		$scope.item = "";
		$scope.quantity= "";
	};

	$scope.addAmount = function(i) { 
		i.amount++;
	};

	$scope.subtractAmount = function(i, index) { 
		if (i.amount > 0) {
			i.amount--;
		}

		else { 
			$scope.list.splice(index, 1);

		}
	};

	$scope.deleteItem = function (index) { 
			$scope.list.splice(index, 1);

	};

	$scope.emptyCart = function () { 
			$scope.list.length = 0;

			

	};


});
