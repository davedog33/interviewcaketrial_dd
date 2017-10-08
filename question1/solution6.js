/*
 *
 * Function  : highestProductOf3
 * Parameter : arrayOfInts ( Array of atleast 3 element)
 * Return    : (Integer) Highest possible product of 3 number in given array
 *
 *
 */

function highestProductOf3(arrayOfInts){

  //Intial Check
  if(arrayOfInts.length < 3){
    throw "Less than 3 items!";
  }

  var output, // final returned value
  current, // temporary loop variable
  highest,
  lowest;

  // we're going to start at the 3rd item (at index 2)
  // so pre-populate highests and lowests based on the first 2 items.
  // we could also start these as null and check below if they're set
  // but this is arguably cleaner

  highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  lowest  = Math.min(arrayOfInts[0], arrayOfInts[1]);

  highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  lowestProductOf2  = arrayOfInts[0] * arrayOfInts[1];

  output = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  // walk through items, starting at index 2
  for (var i = 2; i < arrayOfInts.length; i++) {
    current = arrayOfInts[i];

    // do we have a new highest product of 3?
    output = Math.max(
      output,  // it's either the current highest,
      current * highestProductOf2, // or the current times the highest product of two
      current * lowestProductOf2   // or the current times the lowest product of two
    );

    // do we have a new highest product of two?
    highestProductOf2 = Math.max(
      highestProductOf2,
      current * highest,
      current * lowest
    );

    // do we have a new lowest product of two?
    lowestProductOf2 = Math.min(
      lowestProductOf2,
      current * highest,
      current * lowest
    );

    // do we have a new highest?
    highest = Math.max(highest, current);

    // do we have a new lowest?
    lowest = Math.min(lowest, current);
  }

  return output;
}


try{
  var response = highestProductOf3([1,2]);
}catch(err){
  //Handle Error
  alert(err);
}


try{
  var sampleArray = [12,23,45,23]
  var response = highestProductOf3(sampleArray);
  console.log('Higest product of 3 in array [' + sampleArray.join() + '] is ' + response );
}catch(err){
  alert(err);
}
