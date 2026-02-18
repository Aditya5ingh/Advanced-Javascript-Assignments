// Problem Description – promiseAny(promises)

// You are required to implement a function named promiseAny that accepts an array of Promises.
// The function should return a new Promise that resolves immediately when any one of the input promises resolves successfully.
// If all the promises reject, the returned Promise should reject with an error.
function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Input should be an array"));
    }

    const total = promises.length;

    if (total === 0) {
      return reject(new Error("Empty iterable"));
    }

    let rejectedCount = 0;
    const errors = [];

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve) // resolve immediately on first success
        .catch((err) => {
          errors[index] = err;
          rejectedCount++;

          // reject only if all promises fail
          if (rejectedCount === total) {
            reject(new Error("All promises were rejected"));
          }
        });
    });
  });
}

module.exports = promiseAny;
