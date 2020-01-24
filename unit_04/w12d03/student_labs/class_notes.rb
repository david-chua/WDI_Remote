puts ">>> LOADED"

class Pet
  # attribute_reader(symbol1, symbol2, etc.)

  attr_reader :house_trained, :rescued, :sex, :disposition


  def initialize(rescued, sex, disposition)
    #Privvate
    @house_trained = true
    @rescued = rescued
    @sex = sex
    @disposition = disposition
  end

#This is public
# This is an instance method
  def sleep_on_couch
    "zzzzzzz"
  end


#It is an instance method but also
# getter method
  # def house_trained
  #   @house_trained
  # end
  #
  # def rescued
  #   @rescued
  # end
  #
  # def sex
  #   @sex
  # end
  #
  # def disposition
  #   @disposition
  # end

#This is a class method
  def self.sup
    "sup"
  end

  def eat
    "I'm eating"
  end
end


class Kitty < Pet
  attr_reader :breed, :snark

  def initialize(breed, snark=true)
    @breed = breed
    @snark = snark
  end

  def meoww
    "meoww"
  end

end


class Dog < Pet
  attr_reader :breed

  attr_accessor :happy

  # attr_writer :happy

  def initialize(breed)
    @happy = true
    @breed = breed
  end


  #SETTER Method
  # def happy= (happy)
  #   @happy= happy
  # end

  def happy_toggle
    @happy = !@happy
  end

  def bark
    "woof woof"
  end
end


class SongPartA
  def work
    puts "\tWork, work, work ,work, work"
    puts "\tsay me have to"
    puts "\tWork, work, work, work, work!"
  end
end

class SongPartB < SongPartA
  def work

    puts "\tHe see me do me"
    puts "\tDirt, dirt, dirt, dirt, dirt, dirt!"
    puts "\tSo me put in"
    puts "\tWork, work, work, work, work, work"
    super
  end
end

# initialize method

# In JS -- constructor function
# var Pet = function(name){
# this.name = name
# this.houseTrained = true
# }
#new Pet('fido')
