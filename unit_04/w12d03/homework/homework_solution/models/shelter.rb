# Write your Shelter Class here
class Shelter
  attr_reader :name, :animals, :clients
  def initialize(name)
    @name = name
    @animals = {}
    @clients = {}
  end

  def display_animals
    @animals.values.join("\n")
  end

  def display_puppies
    @animals.values.each do |animal|
      if animal.is_a?(Puppy)
        puts animal
      end
    end
  end

  def display_kittens
    @animals.values.each do |animal|
      if animal.is_a?(Kitten)
        puts animal
      end
    end
  end

  def display_clients
    @clients.values.join("\n")
  end

  def adopt_animal
    puts display_animals
    print "\nWhich animal do you want to adopt? "
    animal = gets.chomp
    puts "\n#{display_clients}"
    print "\nWhat is your name? "
    client = gets.chomp
    clients[client].pets[animal] = animals.delete(animal)
  end

  def return_animal
    puts display_clients
    print "\nWhat is your name? "
    client = gets.chomp
    puts "\n#{clients[client].display_pets}"
    print "\nWhich animal do you want to return? "
    animal = gets.chomp
    animals[animal] = clients[client].pets.delete(animal)
  end

  def to_s
    "#{@name} shelter has #{@animals.count} animals and #{@clients.count} people"
  end
end
