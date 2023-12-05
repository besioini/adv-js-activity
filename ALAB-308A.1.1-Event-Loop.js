
// Part One

let count = 0;

function increment(){
    count++
    increment()
}

try {
    increment()
} catch (error) {
   console.log(Error, error.message)
   console.log(count) 
}

// Part Two
const arr1 = [1, 2, [3, 4, 5], 6, [7, 8]];
// let x = arr.flat();
// console.log(x)

function flatten(arr){
    let result = [];

    // for(let i in arr){
    //     if(typeof(arr[i]) === Array){
    //         result = result.concat(flatten(i));
    //     }else{
    //         result.push(i)
    //     }
    // }
    // console.log(result)

    arr.forEach(element => {
        if(Array.isArray(element)){
            result = result.concat(element)
        }else
            result.push(element)
    });

    console.log(result);
    return result
}

flatten(arr1)

function flatten2(){

}