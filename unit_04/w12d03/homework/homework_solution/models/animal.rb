# write your Animal Class here

class Animal
  attr_reader :name, :species
  attr_accessor :toys

  def initialize(name, species)
    @name = name
    @species = species
    @toys = []
  end

  # When we display the animal using puts, the to_s
  # method is called to convert the animal object into a string
  def to_s
    "#{@name} is a #{@species} that loves #{@toys.join(', ')}"
  end
end

class Puppy < Animal
  def bark
    "bark"
  end
end

class Kitten < Animal
  def meow
    "meow"
  end
end
