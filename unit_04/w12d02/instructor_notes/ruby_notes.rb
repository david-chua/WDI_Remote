# var a = function() {
#
# }

def hello
  # implicit return
 "hello"
end

def hello(name)
  return unless name.class == String

  puts "hello #{name}"
end

def hello(name, salutation, small_talk, punctuation)
  "#{salutation} #{name}, #{small_talk}#{punctuation}"
end

hello("Marc", "Lo", "frickin' cold eh")

def hello(name, salutation="hi", small_talk, punctuation=".")
  "#{salutation} #{name}, #{small_talk}#{punctuation}"
end

def has_defaults(param_one, param_two=true, param_three)
  puts param_two
  puts param_three

 [param_one, param_two, param_three].sample
end

# splat operator with *args

def add(arg1, *numbers)
  puts numbers.class
  sum = 0
  numbers.each do |num|
    sum += num
  end
  sum
end





# Random class Animal
  def breath
    puts 'breathing'
  end
end

class Dog < Animal
  include SomeExtraCOde

end

class Fish < Animal
  include SomeExtraCOde
end

module SomeExtraCOde
  def lay_eggs
    puts "lay eggs"
  end
end

Dog.new.breathing












# default arguments

# thinking about what is returned

# thinking about mutation
