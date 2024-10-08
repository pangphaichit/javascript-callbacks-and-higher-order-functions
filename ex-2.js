//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  //console.log(array);
  let scoreRoom1Result = operation(array);
  console.log(scoreRoom1Result);
}

function check(number){
  let temp = 0
  console.log(number);
  for(let i=0;i<number.length;i++){
    if(number[i]>70){
      temp += 1;
      console.log(temp);
    }
  }
  if(temp>=5){
    return "Pass"
  }else return "Fail"
}
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result;
let scoreRoom2Result;
let scoreRoom3Result;
atLeastFive(studentScoresRoom1,check)
atLeastFive(studentScoresRoom2,check)
atLeastFive(studentScoresRoom3,check)