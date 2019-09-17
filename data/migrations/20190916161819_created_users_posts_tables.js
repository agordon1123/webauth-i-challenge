
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
        tbl.increments();
        tbl
            .string('username', 128)
            .notNullable()
            .unique();
        tbl
            .string('password', 128)
            .notNullable();
    })
    .createTable('posts', tbl => {
        tbl.increments();
        tbl
            .integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl
            .string('post')
            .notNullable()
        tbl
            .timestamp('created_at')
            .defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('posts');
};
