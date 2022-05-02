'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RotasSchema extends Schema {
  up () {
    this.create('rotas', (table) => {
      table.increments()
      table
          .integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      table.string('rota', 40).notNullable()
      table.integer('Registro Academico')
      table.timestamps()
    })
  }

  down () {
    this.drop('rotas')
  }
}

module.exports = RotasSchema
