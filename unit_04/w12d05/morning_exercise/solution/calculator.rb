class Calculator
  attr_accessor :subtotal_amount, :people_amount, :total, :pp

  def initialize
    @subtotal_amount
    @people_amount
    @total
    @pp
  end

  def subtotal  
    puts "What's the subtotal?"
    result = true

    while result do
      @subtotal_amount = gets.chomp
      if @subtotal_amount.match('\d+$')
        @subtotal_amount = @subtotal_amount.to_f
        result = false
      else
        puts "Invalid, please put a number"
      end
    end
    puts @subtotal_amount
  end

  def people
    puts "How many people?"
    result = true
 
    while result do
      @people_amount = gets.chomp
      if @people_amount.match('\d+$')
        @people_amount = @people_amount.to_f
        result = false
      else
        puts "Invalid, please put a number"
      end
    end
    puts @people_amount
  end

  def get_total(tax, tips)
    # puts 'getting total'
    # puts tax
    # puts tips
    @total = @subtotal_amount + tax + tips
    self.get_pp
  end

  def get_pp
    @pp = (@total/@people_amount).round(2)
  end

end
