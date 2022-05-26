// // First answer
//  const words = ['bob','Alicia','Kgothatso']

//  const getLongestWord = (word) => {
//     let longestWord = word.sort((a,b) => a.length - b.length).reverse();
//     return longestWord[0]
// }
//  console.log(getLongestWord(words))

//  //  second Quation
//  const array = [1, 2, 3]; 
 
//  const calculateList = (list) => {
 
//  let sum = 0;
 
//  for (let i = 0; i < array. length; i++) { sum += array[i];
//  }
 
//  return sum
 
//  }
 
//  console.log(calculateList(array))


// // Third answer

// const calculateValues = (num1 , numb2) => {
//     const addedValues = num1 + numb2
    
//     return addedValues 
//     }
    
//     console.log(calculateValues (1 , 2))


// fourth answer
//     const arr1 = [{name:"moral" , surname:"smith"} , {name:"thabo" , surname:"king"}];
    
//     for( let i = 0; i < arr1.length; i++);{

//         newArr.push(arr1[i].name);
//     }
// console.log()
let people = [{name:"moral" , surname:"smith"} , {name:"thabo" , surname:"king"}]
function Names(list){
    let newArray = [];

    for(let i in list){
          newArray.push(list[i].name);

    }
    return newArray
}
console.log(Names(people))