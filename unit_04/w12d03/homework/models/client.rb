# Write your Client Class here
class Client < Shelter
  attr_reader :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end
end
