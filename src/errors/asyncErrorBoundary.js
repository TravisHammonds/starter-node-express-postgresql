/*
The asyncErrorBoundary() function takes two parameters:

delegate, which is an async/await handler or middleware function. This function will be called by the asyncErrorBoundary.

defaultStatus is an optional parameter that allows you to override the status code returned when delegate throws an error.

asyncErrorBoundary returns an Express handler or middleware function, which is eventually called by Express in place of the delegate function.
*/

function asyncErrorBoundary(delegate, defaultStatus) {
  return (request, response, next) => {
    Promise.resolve()
      .then(() => delegate(request, response, next))
      //makes sure that the delegate function is called in a promise chain. Using Promise.resolve() to call delegate means that the value returned is guaranteed to have a catch() method, even if delegate isn't an async function.
      .catch((error = {}) => {
        //will default error to {} in the unlikely event that error is undefined (which will make sure that the destructuring in the next line doesn't fail).
        const { status = defaultStatus, message = error } = error;
        //Next, the error object is destructured to status and message variables. By defaulting message to error, error can be a String or Error object.
        next({
          status,
          message,
        });
        //Finally, next() is called, passing in status and message.
      });
  };
}

//make use of the asyncErrorBoundary by wrapping the async functions when exported by the *.controller.js files:

module.exports = asyncErrorBoundary;
