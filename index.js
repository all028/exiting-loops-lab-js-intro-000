function breakOut(array, changeValue, stopValue){

  for (let x=0; x < array.length; x++){
    var y = array[x]
    if (y == stopValue)
      break
    else
      array[x] = changeValue;
  }//end for
  return array;
}

function keepGoing(array, changeValue, skipValue){

  for (let i=0; i < array.length; i++){

  }//end for


  return array;
}

function findBy(array, findFn){

}
