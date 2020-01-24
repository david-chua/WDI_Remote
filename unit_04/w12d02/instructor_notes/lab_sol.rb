def lengths(array_of_strings)
  word_lengths = []

  array_of_strings.each do |word|
    word_lengths.push(word.length)
  end

  word_lengths
end

def fizzbuzzer(num)
  if (num % 3 === 0)&&(num % 5 === 0)
    return "Fizzbuzz"
  elsif num % 3===0
    return "Fizz"
  elsif num % 5===0
    return "Buzz"
  else
    return "Sorrels"
  end
end

def hasher(arrays)
  new_hash = {}

  arrays.each do |term|
    if term.length === 2
      new_hash[term[0]] = term[1]
    elsif term.length === 1
      new_hash[term[0]] = nil
    end
  end

  new_hash
end

def hash_switcher(hash)
  if hash.class == Hash
    switched_hash = hash.invert
  elsif hash.class == Array
    switched_hash = []
     hash.each do |hash|
       switched_hash.push(hash.invert)
     end
  end

  switched_hash
end

def export_hash(array_one, array_two)
  if array_one.class != Array|| array_two.class != Array
    return nil
  elsif array_one.length != array_two.length
    return "Your input is bad and you should feel bad"
  else
    new_hash = {}

    array_one.each_index do |index|
      new_hash[array_one[index]] = array_two[index]
    end

    new_hash
  end
end

def word_reverse(string)
  string.split(' ').reverse!.join(' ')
end

def letter_reverse(string)
  split_string = string.split(' ')

  split_string.each do |word|
    word.reverse!
  end

  split_string.join(' ')
end

def maximus(array)
  lengths = lengths(array)

  max_idx = lengths.each_index.select do |index|
    lengths[index] == lengths.max
  end

  array[max_idx[0]]
end
