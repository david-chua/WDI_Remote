# Pinspiration (no prompts)

Tonight's full-stack assignment will be creating Pinspiration, an idea-sharing platforms that functions just like [Pinterest.com](https://www.pinterest.com/)

In our app, we can create Boards, which contain many pins.

## Exercise Objectives

- gain practice setting up a Rails app from scratch
- set up a `has_many` `belongs_to` relationship
- gain practice setting up Angular and make $http calls to the Rails API
- gain extra experience setting up full CRUD

## Technical Summary

Users can upload, save, sort, and manage images (aka pins) and other media content (e.g., videos and images) through collections known as "pinboards". Pinspiration acts as a personalized media platform.

## Suggested Workflow

Not sure where to start? Try tackling your application in the following order...

1. Draw an ERD
2. Create migrations to define your database
3. Define your models
4. Define some basic routes
5. Add controllers / actions & views


## Directions

- Create a Rails API app that will serve your Angular front end.
- Implement two models, with a RESTful interface to manage them...
- Commit often

1. Board
2. Pin

Boards have....

  - a title

Pins have....

  - a title
  - an image_url

There is a one-to-many relationship between Boards and Pins


### Seed Data (optional to use):
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
