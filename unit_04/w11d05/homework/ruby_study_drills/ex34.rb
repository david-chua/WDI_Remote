irb(main):001:0> animals = ['bear', 'ruby', 'peacock', 'kangaroo', 'whale', 'platypus']
=> ["bear", "ruby", "peacock", "kangaroo", "whale", "platypus"]
irb(main):002:0> animas[0]
NameError: undefined local variable or method `animas' for main:Object
Did you mean?  animals
	from (irb):2
	from /Users/dp_chua/.rbenv/versions/2.3.0/bin/irb:11:in `<main>'
irb(main):003:0> animals[0]
=> "bear"
irb(main):004:0> animals[2]
=> "peacock"
irb(main):005:0> animals[0]
=> "bear"
irb(main):006:0> animals[3]]
SyntaxError: (irb):6: syntax error, unexpected ']', expecting end-of-input
	from /Users/dp_chua/.rbenv/versions/2.3.0/bin/irb:11:in `<main>'
irb(main):007:0> animals[3]
=> "kangaroo"
irb(main):008:0> animals[4]
=> "whale"
irb(main):009:0> animals[2]
=> "peacock"
irb(main):010:0> animals[5]
=> "platypus"
irb(main):011:0> animals[4]
=> "whale"
