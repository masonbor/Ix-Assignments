var app = angular.module('calculatorApp', []); 

app.controller('CalcCtrl', function($scope) { 
	$scope.doMultiply = function() { 
		var numX = parseInt($scope.x);
		var numY = parseInt($scope.y);
		$scope.result1 = numX * numY;
	};

	$scope.doAdd = function() { 
		var numX = parseInt($scope.x);
		var numY = parseInt($scope.y);
		$scope.result1 = numX + numY;
	};

	$scope.doSubtract = function() { 
		var numA = parseInt($scope.a);
		var numB = parseInt($scope.b);
		$scope.result2 = numA - numB;
	};



});

