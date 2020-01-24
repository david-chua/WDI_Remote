require_relative 'calculator'
require_relative 'tax'
require_relative 'tip'

def calculate
  print "Enter total meal price:"
  subtotal = gets.chomp.to_f
  p subtotal
  
end
