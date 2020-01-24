- that has 112 victims `db.vampires.find({victims: 112})`
- that has the name Francis Frost `db.vampires.find( {"name": { $eq: "Francis Frost" }}).pretty()``
- whose location is "Paris, France" `({"location": {$eq: "Paris, France"}})`
- have greater than 500 victims `db.vampires.find({victims: {$gt: 500}}).pretty()`
- have fewer than or equal to 150 victims `db.vampires.find( { victims: { $lte: 150 }}).pretty()`
- have a victim count is not equal to 210234 `db.vampires.find( {victims: { $ne: 210234 }}).pretty()`
- have greater than 150 AND fewer than 500 victims `db.vampires.find( { $and: [{victims: { $gt: 150 } }, { victims: { $lt: 500 }}]}).pretty()`

Part 2

Select by exists or does not exist

Select all the vampires that:

have a title property `db.vampires.find( {title: {$exists: true }}).pretty()`
do not have a victims property `db.vampires.find( {victims: {$exists: false}}).pretty()`
have a title AND no victims `db.vampires.find( { $and: [{title: {$exists: true}}, {victims: { $exists: false}}]}).pretty()`
have victims AND the victims they have are greater than 1000`db.vampires.find( { $and: [{victims: {$exists: true}}, {victims: { $gt: 1000}}]}).pretty()`

Part 3

Select objects that match one of several values

Select all the vampires that:

love either frilly shirtsleeves or frilly collars `db.vampires.find( { $or: [{ "loves": { $eq: "frilly shirtsleeves"}}, {"loves": { $eq: "frilly collars"}}]}).pretty()`
love brooding `db.vampires.find({ "loves": {$eq: "brooding"}}).pretty()`
love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
`db.vampires.find( { $or: [{ "loves": { $eq: "appearing innocent"}}, {"loves": { $eq: "trickery"}}, {"loves": {$eq: "lurking in rotting mansions"}}, {"loves": {$eq: "R&B music"}}]}).pretty()``

love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
`db.vampires.find( { $and: [{"loves": {$eq: "fancy cloaks"}}, {"loves": {$nin: ["virgin blood", "top hats"]}}]}).pretty()`

Part 5

Select with OR

Select all the vampires that:

are from New York, New York, US or New Orleans, Louisiana, US
love brooding or being tragic
have more than 1000 victims or love marshmallows
have red hair or green eyes
