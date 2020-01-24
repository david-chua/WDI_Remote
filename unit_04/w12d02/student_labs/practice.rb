# Round 1
def fizzbuzzer(n)
  if n % 3 == 0 && n % 5 == 0
    puts "FizzBuzz"
  elsif n % 5 == 0
      puts "Buzz"
    elsif n % 3 == 0
        puts "Fizz"
        else
          puts "Sorrels"
  end
end

fizzbuzzer(3)
fizzbuzzer(5)
fizzbuzzer(15)
fizzbuzzer(2)


#Round 2

def array(array)
  results = {}
  array.reject! { |c| c.empty? }
    p array
  array.each { |k,v| results[k] = v }
    p results
end

array([ ["Husker","Adama"], ["DrRobotmck"], [] ])

# Round 3

def hash_switcher(array)
 puts array.to_h



end

hash_switcher([ {"hello" => "world"}, {"yo" => "lo"} ])
