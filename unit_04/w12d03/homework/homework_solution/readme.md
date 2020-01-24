# HappiTails

![HAPPITAILS](http://www.htpet.net/i/Logo.jpg)

 You are the manager at HappiTails animal shelter. You need to manage your shelter by storing and manipulating information about clients and animals. We'll create a command line app and use Ruby tonight.

## Exercise Objectives:

* gain practice defining object properties and methods
* gain practice accessing object's properties with getter methods
* gain experience with `initialize` method

## Setup:

- Your Animal, Client, and Shelter classes will be defined in `models`
- `main.rb` is where the program runs
- `seed.rb`: reach goal to create seed data

## Object Specs:

### Animal:

- An animal should have a name.
- An animal should have a species.
- An animal can have multiple toys, but doesn't start with any.

### Client:

- A client should have a name.
- A client should have an age.
- A client can have multiple pets (animals), but it doesn't start with any.

### Shelter:

- A shelter should have a name
- A shelter can have multiple animals, but it doesn't start with any.
- A shelter can have multiple clients, but it doesn't start with any.
- A shelter should be able to display all of its clients.
- A shelter should be able to display all of its animals.
- A shelter should be able to facilitate an adoption (one of its clients adopting one of the animals from shelter)
- A shelter should be able to facilitate a return (one of its clients returning his/her pet to the shelter)

<hr>

### Part 1: Defining the Class

- Define the animal, client and shelter classes according to the specs in their respective files in the `models` folder. Each class should have the appropriate attributes and initialize method.
- Test these out with pry to make sure you can create the objects and that they do what you think the should do. Check the methods that you wrote too!
- :dart: Commit -m "Part 1: defined Animal, Shelter, Client classes"

<hr>

### Part 2: Create the Main Program Loop

- Running `ruby main.rb` in terminal should display a menu of options for the user to choose from:
	- 1: Create Animal
	- 2: Create Client
	- Q: Quit
- When creating an animal or client, the user is prompted for information like names, age etc. Newly created animals and clients should be added to the shelter.

You probably remember prompts and alerts from Unit 1. Ruby provides some simple methods to get input from the terminal:

```ruby
user_input = gets.chomp
# pauses the terminal and waits for the user to type something and hit encounter
# saves that entered text to the variable user_input
```

`.chomp` -> https://ruby-doc.org/core-2.3.0/String.html#method-i-chomp

#### Hint: Displaying the Menu

For Part 2, the first thing we should work on is getting the menu screen to render.

- First, define a new method `menu` that `puts` the options on separate lines. We are waiting for user input so don't forget the `gets.chomp`.
- Separately, use a [`while` statement](https://www.tutorialspoint.com/ruby/ruby_loops.htm)  to keep the loop going. Think: while the response isn't `Q` for `Quit`, the app will run as it waits for the user to input a number. `Q` will quit the script completely.
- Use [Ruby Case Statement](http://www.skorks.com/2009/08/how-a-ruby-case-statement-works-and-what-you-can-do-with-it/) to delegate what methods run when a user selects a menu option. For example, typing `1` will run the `create_animal` method.
- Think Hard: how do you **run** the menu? Somewhere outside the methods in `main.rb` you will have to run the menu.

<details><summary>.. Stuck?</summary>
`main.rb` should have the following methods:
  - `menu`: lists all the options, listens for user input.
  - `while statement`: not technically a defined method, but this controls which method runs after a user inputs a number.
  - `create_animal`: Gets information from the user like animal name, species, and toys. Creates a new animal.
  - `create_client`: Gets information from the user like client name and age. Creates a new client.

  - How to run the menu? Since the `menu` method only displays options and waits for user input, we can save that user input in another variable: `response = menu`. Try that out after the menu. Voila!
  - The while statement is dependent on the response, so write a `case` for the response. Think: when `1`, fire the `create_animal` function.
</details>

- :dart: Commit -m "Part 2: created new animal and client"
<hr>

### Part 3: Display Animals and Clients

- Add options to the menu so that a user can:
	- 3: Display all animals
	- 4: Display all clients
  - :dart: Commit -m "Part 3: displayed animals and clients"

##### Example of Part 2 + 3 Working:
  ![gif](images/happytails.gif)

<hr>

### Part 4: More Menu Options

- Add options to the menu so that a user can:
	- Facilitate client adopts an animal. This means the client now has the animal and they should no longer be a part of the shelter.
	- Facilitate client puts an animal up for adoption. This means the client no longer has the animal and it should be added to the shelter.
  - :dart: Commit -m "Part 4: Added More Options"

<hr>

### Part 5: Seeding Data

- `seed.rb` initializes a shelter as well as a few animals and clients so you have some data to start with when you run your program.
- Require your seed file in your `main.rb` file. Your seed file will instantiate all your objects. You should no longer have `Client.new()` or `Shelter.new()` anywhere in your `main.rb` file. All object instantiations should be in `seed.rb`
- :dart: Commit -m "Part 5: Added seed data"

<hr>

## Reach Goals

### Reach #1
- Refactor your code
- Use inheritance to define puppy and kitten classes that inherit from Animal.
- Create methods on shelter to display all animals, just kittens or just puppies.
- Alter seed.rb to create kittens or puppies
- Add further options to the menu so that a user can:
	- Display all puppies
	- Display all kittens
- :dart: Commit -m "Part 6: Puppies and Kittens"

<hr>

### Reach #2
- Limit the number of animals a client can adopt to 2 per client. If they try to adopt more than that, yell at them.
- Refactor your code to have `attr_reader`'s and `attr_writer`'s. HINT : `attr_accessor` is both of them in one
- Refactor your code to make sure it is DRY (Don't Repeat Yourself) and all your methods are in the appropriate classes.
- :dart: Commit -m "Part 7: limited 2 adoptions"

<hr>

### Reach #3

- Add a new class that inherits from your client class called CatLady. A cat lady only takes cats, and takes as many cats as there is space in a computer's memory.
- :dart: Commit -m "Part 8: cat lady class"

<hr>

## Submitting Your Work

When you're ready, push the code to your fork on GitHub and create an issue with
a title in the format "YourGitHubUsername -- Week XX Day XX".
The issue body should have:

-   A link that points back to your fork.

-   A 'comfort' score on how you feel about the material, from 1 (very
    uncomfortable) to 5 (very comfortable)
