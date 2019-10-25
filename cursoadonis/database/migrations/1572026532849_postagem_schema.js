'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostagemSchema extends Schema {
  up () {
    this.create('postagems', (table) => {
      table.increments()
      table.string("titulo",255).notNullable().unique()
      table.text("corpo",255).notNullable()
      table.integer("usuarioid").unsigned()
      table.foreign("usuarioid").references("id").inTable("users")
      table.timestamps()
    })
  }

  down () {
    this.drop('postagems')
  }
}

module.exports = PostagemSchema
