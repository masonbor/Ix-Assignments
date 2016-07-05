// Return 'yes' if the sentence contains only unique characters, 'no' otherwise
function allUniqueCharacters(sentence) {
	var newSentence = sentence.split(' ').sort().join('').trim();
	for (var i = 0; i < newSentence.length; i++) {
		for (var j = i+1; j < newSentence.length; j++) {
			if (newSentence[i] === newSentence[j]) { 
				return 'no';
			}
		}
	}
	return 'yes';

}


// One number 1-10 is missing. Return it!
function missingNum(numbers) {
	var sum = 0;
	for (var i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	};
	var num = 55 - sum; 
	return num; 
}

// Return 'yes' if array1 and array2 are rotated versions of each other, 'no' otherwise
// e.g. [1,2,3,6,7,8] and [3,6,7,8,1,2] are rotated versions of each other
function areRotatedVersions(array1, array2) {
	var newArray1 = array1.sort(function(a, b){return a - b});
	var newArray2 = array2.sort(function(a, b){return a - b});

	if (newArray1.length === newArray2.length) { 
		return 'yes'; 
	}
	else { 
		return 'no';
	}

}

// Return a string of the first n prime numbers, separated by commas
// e.g. "1,2,3,4"
function nPrimeNums(n) {
	for (var i = 0; i < n; i++) {
		var isPrime = true; 
		for (var j = 2; j <= n; i++) {
			if (i % j === 0 && i != j) { 
				isPrime = false;
			}
		}
		var pString = "";
		if (isPrime === true) {
			
		}
	}

}

// Return the output of running the function f twice
// e.g. doitTwice(function f() {return 1;}) === 2
function doItTwice(f) {
	var twice = f() + f(); 

	return twice;

}

// Return an object that has the properties: first name, last name, age, email, and favorite color
function objectFun(first, last, age, email, color) {
    var person = {

    }
    return person;
}

// Return the number of "children" obj has
function numChildren(obj) {
	var num = 0;
	for (key in obj) {
		obj.children[key];
		num++;
	}
	return num;

}

function greeting(name) {
    return "Hello, " + name + "!";
}

// Say hello! This function takes a function as a parameter (greet should be a function)
function sayHello(first, last, greet) {

}