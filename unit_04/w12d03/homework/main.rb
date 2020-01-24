# requiring Shelter, Client, and Animal Classes
require_relative 'models/shelter'
require_relative 'models/client'
require_relative 'models/animal'
require 'pry'

# your code here
puts "Welcome to 'HappiTails' Animal Shelter"
puts "Choose: \n1. Animal \n2. Client \n3. List Animals \n4. List Clients \nQ Quit"
print prompt = "> "

def create_animal

  print "Pet Name?"
  name = gets.chomp
  print  "#{name} is what species?"
  species = gets.chomp
  print "Does #{name} have a toy?"
  toys = gets.chomp
  animal = "So #{name} is a #{species} with that #{toys} as a toy?"
  puts "Choose another option or type Q"
end

def create_client
  puts "What is the client's name?"
  name = gets.chomp
  puts "What is the client's age?"
  age = gets.chomp
  puts "So #{name} is #{age} years old?"
  puts "Choose another option or type Q"
end

while user_input = gets.chomp # loop while getting user input
  case user_input
  when "1"
    create_animal
  when "2"
    create_client
  when "3"
    puts "trying to show all animals"
  when "4"
    puts "trying to show all clients"
  when "Q"
    break
  else
    puts "That is not an option. Choose another option."


  end
end
