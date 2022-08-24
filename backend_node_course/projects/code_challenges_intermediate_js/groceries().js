function groceries(arr){
  //remove the values that I want to use within the array of objects
  arr1 = arr.map(a => a.item);
  //determine the array length so i can splice in the 'and' if needed
  arrLength = arr1.length - 1;
  if (arrLength > 0) {
    //use of splice to put in 'and'
    arr1.splice(arrLength, 0, 'and');
    //join array into a string with apaces
    arr1 = arr1.join(' ');
  } else {
    // other part of condition if the 'and' is not required which will create the string desired
    arr1 = arr1.join(' ');
  }
  // return the string
  return arr1
};
