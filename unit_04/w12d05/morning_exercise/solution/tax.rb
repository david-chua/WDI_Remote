require "./calculator"


class Tax < Calculator
  attr_accessor :tax, :total_tax, :tax_rate, :tax_pp

  def initialize
    # Instance variables
    @total_tax
    @tax_rate
  end

  def get_tax
    puts "What is the tax rate?"
    result = true
    # @tax_rate = gets.chomp
    while result do
      @tax_rate = gets.chomp
      if @tax_rate.match(/^(?:100|[0-9]?[0-9])$/)
        @tax_rate = @tax_rate.to_f
        result = false
      else
        puts "Invalid, please put a number 0-100"
      end
    end
    # puts @tax_rate
  end

  def calculate_tax(subtotal)
    @total_tax = subtotal * (@tax_rate/100)
    puts "total tax is #{@total_tax}"
  end



end
