# Write your Client Class here

class Client
  attr_reader :name, :age, :pets

  def initialize(name, age)
    @name = name
    @age = age
    @pets = {}
  end

  def display_pets
    pets.values.join("\n")
  end

  def to_s
    "#{@name} is a #{@age} year old with #{@pets.count} pets"
  end
end
