# Pinspiration (prompts)

Tonight's full-stack assignment will be creating Pinspiration, an idea-sharing platforms that functions just like [Pinterest.com](https://www.pinterest.com/)

In our app, we can create Boards, which contain many pins.

## Exercise Objectives

- gain practice setting up a Rails app from scratch
- set up a one-to-many relationship with `has_many` `belongs_to`
- gain practice setting up Angular and make $http calls to the Rails API


## Setup

- You will have to create a Rails app from scratch.
- Your front-end app has been scaffolded for you. You do not have to stick with its structure -- you can re-arrange it to your needs.

**Strategy** You can either build a route/view at a time, or choose to build the API backend then move to the front-end. Find your style, and stay organized.

## Rails API

#### Models:
This app has 2 models:
  - A **Board** model that contains a `title`.
  - A **Pin** model that contains a `title` and `image_url`.
  - A board has many pins, and a pin belongs to a board.

#### Suggested Workflow for Rails setup
- Create new rails app called `pinspiration_api`
- Set up cors
- Create the database
- Create Models for Board and Pin (set up their relationship)
- Seed dummy data (listed below)
- Create controllers for Board and Pin
- Set up basic routes
- Test all your routes with POSTMAN

#### Seed Data:
```
Board.destroy_all
boards = Board.create([
  {title:"Books Worth Reading"},
  {title:"Gardening"}
])

Pin.destroy_all
pins = Pin.create([
{title: "The Grapes of Wrath", image_url: "https://upload.wikimedia.org/wikipedia/en/1/1f/JohnSteinbeck_TheGrapesOfWrath.jpg", board: boards[0]},
{title: "Siddhartha", image_url: "http://ecx.images-amazon.com/images/I/41drZBnWSzL._SY344_BO1,204,203,200_.jpg", board: boards[0]},
{title: "Thus Spoke Zarathustra", image_url: "http://static1.squarespace.com/static/535746bae4b049723f707ddf/t/53632dd8e4b0b6889d1b5c8a/1399008742739/Thus+Spoke+Zarathustra", board: boards[0]},
{title: "Notes from underground", image_url: "http://ecx.images-amazon.com/images/I/412Z6leyPKL.jpg", board: boards[0]},
{title: "Huis Clos", image_url: "https://upload.wikimedia.org/wikipedia/en/a/a3/NoExit_cover.gif", board: boards[0]},
{title: "Grow your own Tea", image_url: "http://www.mendongreenhouse.com/Portals/0/Garden.jpg", board: boards[1]},
{title: "Peonies", image_url: "http://landmastersmv.com/wp-content/uploads/2012/10/Gardening.jpeg", board: boards[1]},
{title: "The Joys of Watering", image_url: "http://www.divinehomecare.com/wp-content/uploads/2015/02/Gardening.jpg", board: boards[1]},
{title: "Don't hate! Aerate!", image_url: "https://blog.mint.com/wp-content/uploads/2013/03/10-Tips-to-Spring-Gardening-on-the-Cheap.jpg", board: boards[1]},
{title: "How to love gardening", image_url: "http://womenworkingforoceans.org/wp-content/uploads/2014/05/The-gardening-blog.jpg", board: boards[1]}
])
```

## Angular UI

You may set up your app however you like. You will want to be able to:

- Display all the boards on `localhost:3000/`
- You can create a new board.
- Clicking on a board takes you to the board's show page, listing all of its pins' images and titles.
- You can create, edit, and delete pins.

#### Suggested Workflow for Rails setup
- Sketch it out. Outline what needs to happen.
- Bootstrap your app with Angular. Add a module + controller.
- Set up ui.router
- Start by displaying all Boards on the page
- Be able to create a new board and display it on the page.
- Be able to create a new pin and display it on the page.
- Next work on updating the pin.
- Be able to delete the pin.

#### Screenshots
![image](http://i.imgur.com/VdEIZCa.png)
> Homepage

![image](https://i.imgur.com/ikPjXd9.png)
> Board's show page

## Reach Goals

- Add Comments. Comments have a body and a date/time posted. Comments belong to pins.
- Users can search, sort, or filter of pins / boards / tags
- Style it!
  - For easy-to-use icons [Font Awesome](http://fontawesome.io/) offers over 600 icons
  - [Bootstrap](http://getbootstrap.com/getting-started/) is super popular if you need to style in a pinch and offers a huge amount of features.
  - [PureCSS](https://purecss.io/) is much lighter than Bootstrap and gives you customizable, responsive designs.
  - [Materialize](http://materializecss.com/) is created by Google and is also easy to use and comes with lots of fancy features.

## Submitting Your Work

  When you're ready to submit your work,

  1.  Add, commit, and push your code to your fork of the class repo.
  2.  File an issue on the class repo titled "Your Name -- wXXdXX".

  The issue should include:

  -   A link that points back to your fork.

  -   A 'comfort' score on how you feel about the material, from 1 (very
      uncomfortable) to 5 (very comfortable)
