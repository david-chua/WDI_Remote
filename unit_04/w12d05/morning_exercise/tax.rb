# Tax class inherits calculator

class Taxes

  def find_tax
    print 'What percent is your state tax value?'
    tax = gets.chomp.to_f
  case
    when 0..100
      tax_to_percent = tax / 100
      p tax_to_percent
    else
      p "not a valid tip"
  end
  end
find_tax
end
