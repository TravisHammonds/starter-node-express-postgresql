const categoriesService = require("./categories.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// function list(req, res, next) {
//   categoriesService
//     .list()
//     .then((data) => res.json({ data }))
//     .catch(next);
// }

async function list(req, res) {
  const data = await categoriesService.list();
  //function executes a Knex query, which is an asynchronous operation. Using the await keyword before categoriesService.list() forces the execution of the code to pause on that line until that asynchronous operation is finished. Once it is, the resolved response is stored in data.

  //Because the list() function contains a function that uses await, you must add the async keyword in front of the list() function. Otherwise, your code won't work properly.
  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};