var largest = function ArrMax(arr) {  
  var test = -99999;
  test.MIN_VALUE
  for(var i = 0; i < arr.length; i++){  // Loop through the outer array elements
  	if(arr[i]>test){
  		test=arr[i]
  	}
  }
  return test;
}

var average = function ArrAvg(numbers) {
    // average of [3, 5, 4, 4, 1, 1, 2, 3] is 2.875
    var total = 0,
        i;
    for (i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total / numbers.length;
}

var strings = function isMember(arg1,arg2) {
  var exist = false;
  for( i =0; i< arg1.length; i++){
    if(arg1[i] == arg2){
      exist = true
    }
  }
  return exist
}

var strings = function isMember(arg1,arg2) {
  var exist = false;
  arg1.forEach(function(item){
    if(item == arg2){
      exist = true
    }
  })
  return exist
}