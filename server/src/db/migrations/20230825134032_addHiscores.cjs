/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("hiscores", (table) => {
        table.bigIncrements("id").primary()
        table.string("groupName").notNullable().unique()
        table.integer("uniques").notNullable()
        table.boolean("prestige").notNullable().defaultTo(false)
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("hiscores")
}
