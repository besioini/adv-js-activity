
// Create a Promise that resolves after one second.
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error;
        if(error === true){
            resolve(console.log("Guess this worked!") );
        }else
            reject(console.log('Error'))
    }, 1000);
});

// Add some then() methods to handle additional tasks.
myPromise
    .then((x) => x + console.log(' Again?') )
    .then((x) => x + ' Third time!')
    .then((x) => x + ' Promises are cool.')
    .catch((err) => {
        console.error(err);
    })

new Promise((resolve, reject) => {
  console.log("Initial");

  resolve();
})
  .then(() => {
    throw new Error("Something failed");
  })
  .catch(() => {
    console.error("Do that");
  })
  .then(() => {
    console.log("Do this, no matter what happened before");
  });

  doSomethingCritical()
  .then((result) =>
    doSomethingOptional(result)
      .then((optionalResult) => doSomethingExtraNice(optionalResult))
      .catch((e) => {}),
  ) // Ignore if optional stuff fails; proceed.
  .then(() => moreCriticalStuff())
  .catch((e) => console.error(`Critical failure: ${e.message}`));