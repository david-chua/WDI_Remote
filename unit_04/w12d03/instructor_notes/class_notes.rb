puts ">>> LOADED"

class Pet
  # attribute_reader(:symbol1, :symbol2, etc.)
  attr_reader :house_trained, :rescued, :sex, :disposition


  def initialize(rescued, sex, disposition)
    # Private
    @house_trained = true
    @rescued = rescued
    @sex = sex
    @disposition = disposition
  end

  # THIS IS PUBLIC
  # THIS IS AN INSTANCE METHOD
  def sleep_on_couch
    "zzzzzzz"
  end

  # It is an Instance Method but also:
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

  # THIS IS A CLASS METHOD
  def self.sup
    "sup"
  end

  def eat
    "I'm eating"
  end
end

module ExtraCode
  def walk
    "I'm walking"
  end

  def breath
    "I'm breathing"
  end
end

class Fish < Pet
end

class Kitty < Pet
  include ExtraCode

  attr_reader :breed, :snark

  def initialize(breed, snark=true)
    @breed = breed
    @snark = snark
  end

  def meoww
    "meow"
  end
end

class Dog < Pet
  include ExtraCode
  # GETTER METHOD
  attr_reader :breed
  # SETTER METHOD
  # attr_writer :happy
  # BOTH GETTER AND SETTER
  attr_accessor :happy

  def initialize(breed)
  #  super
   @breed = breed
   @happy = true
  end

  # SETTER METHOD
  # def happy=(happy)
  #   @happy = happy
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
    puts "\tWork, work, work, work, work, work"
    puts "\tsay me have to"
    puts "\tWork, work, work, work, work, work!"
  end
end

class SongPartB < SongPartA
  def work
    puts "\tHe see me do me"
    puts "\tDirt, dirt, dirt, dirt, dirt, dirt!"
    puts "\tSo me put in"
    puts "\tWork, work, work, work, work, work"
    # super
  end
end



# intialize method

# IN JS -- constructor function
# var Pet = function(name) {
#   this.name = name;
#   this.houseTrained = true;
# }
# new Pet('fido')
