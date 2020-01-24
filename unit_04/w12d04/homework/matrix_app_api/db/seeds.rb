# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Character.create([

	{ name: "Neo", description: "A computer hacker who becomes 'The One' in leading the war against machines." },
	{ name: "Trinity", description: "Neo's BFF and GF, made famous by cracking a database so secure that she is famous among hackers." },
	{ name: "Morpheus", description: "Pill-carrying captain of the Nebuchadnezzar wanted by 'The Agents.'" },
	{ name: "Agent Smith", description: "A sentient computer program carefully disguised like an average-looking human male who is Neo's archenemy. "}

])

Vehicle.create(name: "Nebuchadnezzar", vehicle_type: "Spaceship")
