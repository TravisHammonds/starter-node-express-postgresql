const suppliers = require("../fixtures/suppliers");
//requires the suppliers seed data and stores it in the suppliers variable.

exports.seed = function (knex) {
  return (
    knex
      .raw("TRUNCATE TABLE suppliers RESTART IDENTITY CASCADE")
      //The knex.raw() method uses the SQL statement RESTART IDENTITY to reset the primary key values.

      // Adding CASCADE ensures that any references to the entries in the suppliers table are deleted as well when the entries are deleted.

      // As a note, the Knex truncate() method is preferable to writing a raw SQL statement to truncate the data, but it does not provide a way to reset the values in the primary key column after entries are deleted from the table.
      .then(function () {
        return knex("suppliers").insert(suppliers);
        //Putting knex("suppliers").insert(suppliers) inside then() ensures that this line will only get executed after the preceding knex.raw() function is complete.
      })
  );
};
