# write your Animal Class here
class Animal
  attr_reader :name, :species, :toys

  def initialize(name, species, toys)
    @name = name
    @species = species
    @toys = toys
    @animal = Animal.new(name, species,toys)

  end

  def toys= (toys)
    @toys= toys
  end

end
