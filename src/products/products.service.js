const knex = require("../db/connection");

function list() {
  return knex("products").select("*");
}

function read(productId) {
  return knex("products").select("*").where({ product_id: productId }).first();
  //The first() method returns the first row in the table as an object.
}

module.exports = {
  list,
  read,
};
