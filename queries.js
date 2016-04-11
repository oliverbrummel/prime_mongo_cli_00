//finds documents that have awards
db.bios.find({awards: {$exists: true}}).pretty()

//finds documents that DONT have awards
db.bios.find({awards: {$exists: false}}).pretty()

//finds documents that have contribs for OOP or UNIX
db.bios.find({$or: [{"contribs":"OOP"},{"contribs":"UNIX"}]}).pretty()

//finds documents with "Turing Awards" awards
db.bios.find({"awards": {$elemMatch: {"award": "Turing Award"}}}).pretty()

//finds documents with IDs between 3 and 7
db.bios.find({$and: [{ "_id:" {$lt: 7, $gt: 3}}]}).pretty()

//finds documents with awards before year 2000
db.bios.find({"awards": {$elemMatch: {"year": {$lt: 2000}}}}).pretty()

//finds documents that have no death date
db.bios.find({ death: {$exists: false}}).pretty()
