# Tip class inherits calculator
def tip_percentage
  print 'What tip percent are you leaving?'
  tip= gets.chomp.to_f
case
  when 0..100
    p tip_percent.t
  else
    p "not a valid tip"
end
end

tip_percentage
