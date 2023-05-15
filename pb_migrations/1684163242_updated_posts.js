migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("phs8j12fi3p3t91")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("phs8j12fi3p3t91")

  collection.name = "posts"

  return dao.saveCollection(collection)
})
