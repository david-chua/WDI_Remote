require "./calculator"

class Tip < Calculator
  attr_accessor :total_tips, :tip_percentage

  def initialize
    @total_tips
    @tip_percentage
  end

  def tips
    puts 'in tips'
    case @tip_percentage
    when 1
      @tip_percentage = 15.0
    when 2
      @tip_percentage = 18.0
    when 3
      @tip_percentage = 20.0
    when 4
      puts "Enter another tip percentage"
      result = true
      while result do
        @tip_percentage = gets.chomp
        if @tip_percentage.match(/^(?:100|[0-9]?[0-9])$/)
          @tip_percentage = @tip_percentage.to_f
          result = false
        else
          puts "Invalid, please put a number 0-100"
        end
      end
    end
  end

  def get_tips
    puts "How much tip would you like to leave?
        1. 15%
        2. 18%
        3. 20%
        4. Other"
    result = true

    while result do 
      @tip_percentage = gets.chomp
      # @tip_percentage = gets.chomp
      # raise 'an issue has occured'
      if @tip_percentage.match(/^[1-4]$/)
        @tip_percentage = @tip_percentage.to_f
        tips
        result = false
      else
        puts "Invalid input!"
      end
    end
  end

  def calculate_tips(subtotal)
    @total_tips = subtotal * (@tip_percentage/100)
    puts "total tip is #{@total_tips}"
  end

end

