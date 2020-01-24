require "./tax"
require "./tip"
require "./calculator"

calculator = Calculator.new
calculator.subtotal
calculator.people

tip = Tip.new
tip.get_tips

tax = Tax.new
tax.get_tax

tax.calculate_tax(calculator.subtotal_amount)
tip.calculate_tips(calculator.subtotal_amount)
calculator.get_total(tax.total_tax, tip.total_tips)


puts "Total bill is #{calculator.total}"
puts "Each person pays #{calculator.pp}"
