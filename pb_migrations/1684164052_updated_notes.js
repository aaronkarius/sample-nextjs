migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("phs8j12fi3p3t91")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bhx6sbb4",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("phs8j12fi3p3t91")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bhx6sbb4",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
