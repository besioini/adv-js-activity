
// Part One

let couter = 0;

const increment = () => {
    try {
        couter++
        increment()   
    } catch (error) {
        console.log(couter, error.message)
    }
}
increment()

// Part Two

const arr1 = [1, 2, [3, 4, 5], [6,7, 8]];

function flatten(arr){
    let result = [];

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

trampoline 
function trampoline(fn) {
    while (typeof fn === 'function') {
        fn = fn();
    }
    return fn;
}
//  const trampoline = (f, ...args) => {
//   let result = f(...args);
//   while (typeof result === "function") {
//     result = result();
//   }
//   return result;
// }

const result = trampoline(() => flatten(arr1) )
console.log(result)


// Part Three

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true, num > 1
}

console.log(isPrime(4))

function addPrimeNums(n) {
    const element = document.getElementById('prime-numbers');
    element.innerHTML = '';
    for(let i=1; i<=n; i++){
        if(isPrime(i)){
            const listItem = document.createElement('p');
            listItem.textContent = i;
            element.appendChild(listItem);
        }
    }
    setTimeout(alert('Cald finished'), 3)
}
addPrimeNums(100)

