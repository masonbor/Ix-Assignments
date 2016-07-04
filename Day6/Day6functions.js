function average(numbers_list) {
    var sum = 0;
    for (var i = 0; i < numbers_list.length; i++) {
        sum += numbers_list[i];
    }
    var average = sum / numbers_list.length;
    return average;
}

function assignGrade(grade) {
    if (grade < 60) {
        return 'F';
    } else if(grade >= 60 && grade < 70) {
        return 'D';
    }
    else if(grade >= 70 && grade < 80) {
        return 'C';
    }
    else if(grade >= 80 && grade < 90) {
        return 'B';
    }
    else {
        return 'A';
    }
}

function pluralize(num, noun) {
    if(num === 1) {
        return num + " " + noun;
    } else
        return num + " " + noun + "s";
}

function longestWord(sentence) {
    var splitSentence = sentence.split(" ");
    var currLongestWord = " ";
    for (var i = 0; i < splitSentence.length; i++) {
        if (splitSentence[i].length > currLongestWord.length) { 
            currLongestWord = splitSentence[i];
        }
    }
    return currLongestWord;
}

function palindrome(word) { 
    var backward = "";
    for (var i = word.length - 1; i >= 0; i--) {
        backward += word[i]; 
    };

    if (word === backward) {
        return "yes";
    }
    else { 
        return "no"
    }
}

function letterCounter(phrase, letter) {
    var currCount = 0;
    for(var i = 0; i < phrase.length; i++) {
        if(phrase[i] === letter)
            currCount++;
    }
    return currCount;
}

function longestPalindrome(sentence) {
    var longest = longestWord(sentence);
    if (palindrome(longest) === "yes") { 
        return longest + " is a palindrome";
    }

    else { 
        return longest + " is not a palindrome";
    }

}

function areAnagrams (sentence1, sentence2) {

    var newSentence1 = sentence1.split("").sort().join().trim();
    var newSentence2 = sentence2.split("").sort().join().trim();

    if (newSentence1 ===  newSentence2) { 
        return 'yes';

    }
    else { 
        return 'no';

    }
}