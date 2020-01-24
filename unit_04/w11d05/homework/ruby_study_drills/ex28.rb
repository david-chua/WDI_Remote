# Used pry to test it. 
# [1] pry(main)> true && true
# => true
# [2] pry(main)> false && true
# => false
# [3] pry(main)> 1 == 1 && 2 == 1
# => false
# [4] pry(main)> "test" == "test"
# => true
# [5] pry(main)> 1 == 1 || 2 != 1
# => true
# [6] pry(main)> true && 1 == 1
# => true
# [7] pry(main)> false && 0 != 0
# => false
# [8] pry(main)> true || 1 == 1
# => true
# [9] pry(main)> "test" == "testing"
# => false
# [10] pry(main)> 1 != 0 && 2 == 1
# => false
# [11] pry(main)> "test" != "testing"
# => true
# [12] pry(main)> "test == 1
# [12] pry(main)* "test" == 1
# SyntaxError: unexpected tIDENTIFIER, expecting end-of-input
# "test" == 1
#      ^
# [12] pry(main)> "test == 1
# [12] pry(main)* "
# => "test == 1\n"
# [13] pry(main)> "test" == 1
# => false
# [14] pry(main)> !(1 == 1 && 0 != 1)
# => false
# [15] pry(main)> !(true && false)
# => true
# [16] pry(main)> !(1 == 1 && 0 != 1)
# => false
# [17] pry(main)> !(10 == 1 || 3 == 4)
# => true
# [18] pry(main)> !("testing" == "testing" && "Zed" == "Cool Guy")
# => true
# [19] pry(main)> 1 == 1 && (!("testing" == 1 || 1 == 0))
# => true
# [20] pry(main)> "chunky" == "bacon" && !(3 == 4 || 3 == 3))
# SyntaxError: unexpected ')', expecting end-of-input
# [20] pry(main)> "chunky" == "bacon" && (!(3 == 4 || 3 == 3))
# => false
# [21] pry(main)> 3 == 3 && (!("testing" == "testing" || "Ruby" == "Fun"))
# => false
# [22] pry(main)>
