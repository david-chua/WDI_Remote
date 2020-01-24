---
title: Rails API Routes + Controllers
type: lesson
duration: 60 min
creator:
    name: Marc Wright
    city: WDIR
competencies: Programming

---

[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Rails API Routes + Controllers

## Objectives

- Add a controller with index, show, new, create methods
- Test routes with Postman

<br>

## Prerequisites

- Understand and use `rails console`
- Understand Postman

<br>

##Intro

Over the past few lessons we created a Muse App that contains `Artist` and `Song` models. Up to this point, we've worked with the **Model** or data layer and tested our code using the rails console. Now we're gonna add some **routes** and **Controller** methods that will respond to requests with JSON data.

<br>

## Rails API Resource Routes

http://guides.rubyonrails.org/routing.html

First, we need to add some routes so a front-end can communicate with our Rails API back-end. Here are the routes we'll need for an Artist:

- **Index (GET)** - Renders all of the artists
- **Show (GET)** - Renders one artist
- **Create (POST)** - Saves the artist to the database then redirects. Create has no view. 
- **Update (PATCH)** - Updates the artist we just edited. Update has no view.
- **Destroy (DELETE)** - Deletes an artist

Note that we don't need `new` or `edit` routes since they merely contain a form in a view. We only need the 5 routes above for our CRUD API. Now, we could write our all of our routes manually, but Rails give us a really handy helper called `resources` that will generate the routes above auto-magically. Let's add `resources :artists` to the `config/routes.rb` file.

```rb
Rails.application.routes.draw do
  resources :artists
end
```

This tells Rails to build 5 CRUD routes for the artists resource. If you run `rails routes` in the Terminal you can view the details.

<br>

![](https://i.imgur.com/IuZt4e4.png)

> You can also goto the URL: http://localhost:3000/rails/info/routes

As you can see, each route consists of:

- an **HTTP Verb**
- a **path**
- a **controller** 
- the specific **action** (or method) inside the controller that manages that route

<br>

## Rails API Artists Controller

Now that we have our routes squared away, let's create a controller to manage the artist data. We could create the file manually, but Rails has a helpful command to bootstrap the file for us:

`rails g controller artists`

This will create an `app/controllers/artists_controller.rb` file. You'll see this inside:

```rb
class ArtistsController < ApplicationController
end
```

We're gonna start filling in the controller with our API methods.

<br>

## ArtistsController Index Method

Earlier we ran `rails routes` to check out the details of our 5 routes. We know that to get all the artists, we'll send a HTTP `GET` request to our app at "/artists" which will direct us to the `ArtistsController` and the `index` action.

```ruby
class ArtistsController < ApplicationController
    
  def index 
    artists = Artist.all  
    	
    render json: artists
  end
    
end
```

Can you guess what this code is doing? We're using the active record method `.all` to query the database for all the artists and assigning them to an `artists` variable. Then, we're responding with the artists json data.

Fire up your server with `rails s`, open Postman to test out the `localhost:3000/artists` endpoint.

<br>

![](https://i.imgur.com/xv57Vbt.png)

<br>

## ArtistsController Show Method

Let's add a `show` method to `artists_controller.rb`. We also need to grab the artists songs. How did we do this in `rails c`?

```ruby
def show
  artist = Artist.find(params[:id])

  render json: artist
end
```

Test it out in Postman

<br>

## ArtistsController Create Method

```ruby
# POST /artists
  def create
    artist = Artist.new(artist_params)

    if artist.save
      render json: artist, status: :created, location: artist
    else
      render json: artist.errors, status: :unprocessable_entity
    end
  end
  
  ...
  
  private
  
    # Only allow a trusted parameter "white list" through.
    def artist_params
      params.require(:artist).permit(:name, :hometown, :img, :albums)
    end
```

Rails takes security very seriously. For the create method we'll create a private method `artist_params`. Rails will expect an artist object in the request and will only whitelist/permit the parameters we pass in.

No view for this action! Why?

Test it out in Postman.

![](https://i.imgur.com/pwbzz1e.png)

<br>

## ArtistsController Update Method

```ruby
  # PATCH/PUT /artists/:id
  def update
    artist = Artist.find(params[:id])

    if artist.update(artist_params)
      render json: artist
    else
      render json: artist.errors, status: :unprocessable_entity
    end
  end
```

Test it out in Postman:

![](https://i.imgur.com/FXTRtzO.png)

<br>


## ArtistsController Delete Method

```ruby
# DELETE /artists/:id
def destroy
  artist = Artist.find(params[:id])
  artist.destroy
  artists = Artist.all
	
  render json: artists    
end
```

Test it out in Postman:

![](https://i.imgur.com/sHHf0i9.png)

<br>

## ArtistsController Create Song Method
We're not gonna add full CRUD to our `Song` resource (we'll leave that to you). However, we are gonna give a user the ability to create a new `Song` for an `Artist`.

1. Let's create our songs new route in `routes.rb`
    
    ```ruby
post '/artists/:id/songs', to: 'artists#new_song'
```

    This means that:

    - We'll send a `post` request to the URL `/artists/:id/songs`
    - Rails will route this request to the `artists` controller's `new_song` method (which we'll create)
    - We could create a seperate `SongsController`, but this is simpler

2. We'll add this custom method in our Artist Controller

    ```ruby
class ArtistsController < ApplicationController


    ...

         def new_song
            puts params
            artist = Artist.find(params[:id])
            new_song = artist.songs.create({title: params[:title]})
    
            songs = artist.songs
    
            render json: {artist: artist, songs: songs}
        end

    end
```

1. Test it out in Postman (I'm using Taylor Swift. In my db her `:id` is 7):

    ![](https://i.imgur.com/g6GEhHy.png)

1. Confirm in `rails c`:

    ![](https://i.imgur.com/VT0YvOo.png)

<br>

![Imgur](http://i.imgur.com/wPefQjh.png)

## Conclusion (5 mins)

Hooray! So over the past few lessons we've accomplished the following:

- Created a new Rails API app
- Created Artist and Song models
- Set up a one-to-many relationship between Artist and Song
- Practiced our Active Record methods rails console with our seeded data
- Created 5 REST-ful API routes for our Artist resource
- Started REST-ful API routes on our Song model

<br>

![Imgur](http://i.imgur.com/WzTTdIe.jpg)

## Labtime

- Finish adding full CRUD to an Artist's `Song`
- Try updating the Artist index and show routes to return the song data.
