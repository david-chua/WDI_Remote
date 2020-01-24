# Instantiate a Shelter
@shelter = Shelter.new('HappiTails')

# Instantiate clients.  Insert them into the shelter's clients hash
@shelter.clients['Bob'] = Client.new('Bob', 22)
@shelter.clients['Sue'] = Client.new('Sue', 31)
@shelter.clients['Jill'] = Client.new('Jill', 46)
@shelter.clients['Sam'] = Client.new('Sam', 87)

# Instantiate animals.  Insert them into the shelter's animals hash
@shelter.animals['Spot'] = Animal.new('Spot', 'Dog')
@shelter.animals['Spot'].toys << 'Bone'
@shelter.animals['Lassy'] = Animal.new('Lassy', 'Dog')
@shelter.animals['Lassy'].toys << 'Frisbee'
@shelter.animals['Molly'] = Animal.new('Molly', 'Cat')
@shelter.animals['Molly'].toys << 'Rope'
@shelter.animals['Fido'] = Animal.new('Fido', 'Dog')
@shelter.animals['Fido'].toys << 'Chew Toy'
@shelter.animals['Sport'] = Animal.new('Sport', 'Dog')
@shelter.animals['Sport'].toys << 'Treats'
