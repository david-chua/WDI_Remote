# # requiring Shelter, Client, and Animal Classes
# require_relative 'models/shelter'
# require_relative 'models/client'
# require_relative 'models/animal'
# require_relative 'seeds'
# require 'pry'

require_relative 'models/shelter'
require_relative 'models/client'
require_relative 'models/animal'
require 'pry'

@shelter = Shelter.new('MyShelter')

def menu
  puts `clear`
  puts "*** HappiTails Animal Shelter ***\n\n"
  puts '1 : Create Animal'
  puts '2 : Create Client'
  puts '3 : List Animals'
  puts '4 : List Clients'
  puts '5 : Adopt Animal'
  puts '6 : Return Animal'
  puts '7 : List Puppies'
  puts '8 : List Kittens'
  puts "Q : Quit\n\n"
  print '--> '
  gets.chomp
end

def create_animal
  print "Name: "
  name = gets.chomp
  print "Species: "
  species = gets.chomp
  print "Toys: "
  toys = gets.chomp.split

  # @animal = Animal.new(name, species)
  # puts "Is it one of the following?"
  # puts "1: puppy"
  # puts "2: kitten"
  # puts "3: neither"
  # puppy_or_kitten = gets.chomp
  # @shelter.animals[name] = if puppy_or_kitten == "1"
  #                            Puppy.new(name, species)
  #                          elsif puppy_or_kitten == "2"
  #                            Kitten.new(name, species)
  #                          else
  #                            Animal.new(name, species)
  #                          end
  @shelter.animals[name] = Animal.new(name, species)
  # @shelter.animals[name].toys = toys
end


def create_client
  print "Name: "
  name = gets.chomp
  print "Age: "
  age = gets.to_i
  @shelter.clients[name] = Client.new(name, age)
end

response = menu
while response != 'Q'
  case response
  when '1'
    create_animal
  when '2'
    create_client
  when '3'
    puts @shelter.display_animals
    gets
  when '4'
    puts @shelter.display_clients
    gets
  when '5'
    @shelter.adopt_animal
  when '6'
    @shelter.return_animal
  when '7'
    @shelter.display_puppies
  when '8'
    @shelter.display_kittens
  end

  response = menu
end
