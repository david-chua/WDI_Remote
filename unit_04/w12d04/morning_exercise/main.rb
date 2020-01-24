<<<<<<< HEAD
# I NEED SOME CODE
def options
@user_input = ""

 while(@user_input.casecmp("Q")!=0)
    puts "Calculator"
    puts "1: Subtotal"
    puts "2: Total after tax"
    puts "3: Tip"
    puts "4: Total per person"
    puts "Q: Quit"
    @user_input = gets.chomp
    case@user_input
    when "1"
      subtotal
    when "2"
      sub_with_tax
    when "3"
      tip
    when "4"
      per_person

    end
  end
end

def subtotal
 print "How much is your meal?"
  meal_price = gets.chomp
 print "meal total is #{meal_price}"
end

def sub_with_tax
 puts "sub_with_tax"
end

def tip
 puts "tip"
 meal_tip = gets.chomp
 meal_price * ()
end

def per_person
  p "number of people"
  people = gets.chomp
  p people
 puts "per_person"
end

#calls option after everything is loaded

options
=======
# asking for subtotal
p "whats your subtotal"
subtotal = gets.chomp.to_f

p subtotal

p "number of people"
people = gets.chomp.to_f

p people

puts %q{
  how much tip to leave?
  1. 15%
  2. 18%
  3. 20%
  4. other
}

option = STDIN.gets.chomp
p option

case option
  when "1"
    tip_percent = 0.15
  when "2"
    tip_percent = 0.18
  when "3"
    tip_percent = 0.20
  else
    puts "Invalid option, assuming 50% tip"
    tip_percent = 0.50
end

p tip_percent

p "What is the tax percentage? (eg 5, 6, 7)"
tax_percent = gets.chomp.to_f

p tax_percent



tax_value = subtotal * (tax_percent/100.0)
# meal_with_tax = subtotal + tax_value
p 'tax value is #{tax_value}'
p tax_value
tip_value = subtotal * tip_percent
p tip_value
# total_value = meal_with_tax * tip_percent/100
# total = meal_with_tax + tip_value
total = subtotal + tax_value + tip_value
total_pp = total/people

puts "total is #{total}"
puts "each person pays #{total_pp}"



>>>>>>> cde6d6a9b8804180cfb6b10b7b2ced23abfa50a3
