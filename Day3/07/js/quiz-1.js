var numbers = [2, 4, 6, 8, 10];
showArray(numbers);

var sum = 0
for(var i=0; i<numbers.length; i++) {
	sum += numbers[i];
}
numbers.push(sum);
showArray(numbers);


function showArray(arr) {
	var str = "<table><tr>";
	for (var i=0; i<arr.length; i++) {
		str += "<td>" + arr[i] + "</td>";
	}
	str += "</tr></table>";
	document.write(str);
}


//  ## sum을 함수로 빼는거 잘안되네... 에러남;;

// var numbers = [2, 4, 6, 8, 10];
// showArray(numbers);

// sum(numbers);
// numbers.push(sum);
// showArray(numbers);


// function showArray(arr) {
// 	var str = "<table><tr>";
// 	for (var i=0; i<arr.length; i++) {
// 		str += "<td>" + arr[i] + "</td>";
// 	}
// 	str += "</tr></table>";
// 	document.write(str);
// }

// function sum(arr) {
// 	var sum = 0;
// 	for(var i=0; i<arr.length; i++) {
// 		sum += arr[i];
// 	}
// 	return sum;
// }

