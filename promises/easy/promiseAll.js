// Problem Description – Custom Implementation of Promise.all

// You are required to implement your own version of Promise.all without using the built-in method.
// The function should accept an array of values that may include Promises or plain constants.
// It must resolve with an array of results in the same order once all inputs resolve, or reject immediately if any input rejects.
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Input must be an array"));
    }
    const results = [];
    let resolvedCount = 0;
    const totalPromises = promises.length;
    if (totalPromises === 0) {
      return resolve(results);
    }
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          resolvedCount++;
          if (resolvedCount === totalPromises) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

module.exports = promiseAll;
