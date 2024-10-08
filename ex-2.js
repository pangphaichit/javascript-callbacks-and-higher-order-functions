//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here

  let count = 0
  for (let i=0; i<array.length; i++) {
    if (array[i] > 70 ) {
      count++
    }
  }
  return operation.call(this,count)
}

function operationcount(total) {
  if (total >= 5) {
    return `นักเรียนห้องที่  ${this.roomNumber} ผ่านเกณฑ์ ✅`
  } else 
    return `นักเรียนห้องที่ ${this.roomNumber} ไม่ผ่านเกณฑ์ ❌`
}
  

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, operationcount.bind({ roomNumber: 1 }));
let scoreRoom2Result = atLeastFive(studentScoresRoom2, operationcount.bind({ roomNumber: 2 }));;
let scoreRoom3Result = atLeastFive(studentScoresRoom3, operationcount.bind({ roomNumber: 3 }));;

console.log(scoreRoom1Result)
console.log(scoreRoom2Result)
console.log(scoreRoom3Result)