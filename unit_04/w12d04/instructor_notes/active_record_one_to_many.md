---
title: One-to-Many Relationships using Active Record
type: lesson
duration: 60 min
creator:
    name: Marc Wright
    city: WDIR
competencies: Programming

---

[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## One-to-Many Relationships using Active Record

### Objectives

_After this lesson, students will be able to:_

- Create a `one-to-many` relationship between 2 models
- Perform CRUD actions on two models using `rails console`
- Describe primary and foreign keys

### Preparation
*Before this lesson, students should already be able to:*

- Access and use `rails console`
- Perform CRUD actions on one model

<br>

## Intro

We covered the concept of primary and foreign keys during our SQL intro. Now we're gonna see how Active Record will manage those relationships for us.

Active Record Association Basics: http://guides.rubyonrails.org/association_basics.html

<br>

## Framing: Review One-to-Many Relationships (5 min)

Previously, we created a Rails app using an `Artist` as our model. In this lesson, we're gonna add a `Song` model that will belong to the `Artist`. Since an `Artist` typically has many songs we're gonna create a One to Many Relationship between the two models.

**YOU DO**- What are some other examples of one-to-many relationships that you can think of?

* A `Post` has many `Comments`
* A `Album` has many  `Songs`
* A `Movie` has many `Actors`

In our Muse app, an `Artist` will have many instances of a `Song`.
We need a way to represent this type of many to many relationship!

<br>

## Primary and Foreign keys

We covered the concept of primary and foreign keys during our SQL intro. Here is an example of a one-to-many relationship from the Rails Guides. 


![](https://i.imgur.com/ukB8G4c.png)
<br>

Note that both authors and books each have their own `id` field. These are primary keys. 

Now, how can we relate the books that belong to a given author? We add an `author_id` field, or foreign key, to the books table. The `author_id` will be the `id` of the author who wrote  the book.


<br>

![wedo](http://i.imgur.com/6Kce0ca.png)

### Generating the Model / Migration (5 min)

We can generate the `Song` model just like our `Artist` model! If we specify the attributes (i.e.
columns on the command line, Rails will automatically generate the correct migration for us.)

Based on what we covered this morning in creating an `Artist` model... what would be the rails command to create a `Song` model with title, genre, and length attributes?

1. From the command line, generate the `Song` model:

	```bash
	rails g model Song artist:references title genre
	```
	- We'll see shortly that `artist:references` will add a foreign key field of `artist_id` to our songs table
	- It'll also add some fancy database indexing under the hood for efficency 


2. Run `rails db:migrate`. This will generate a Song model, with `artist_id`, `title`, and `genre` columns. We can look at `db/schema.rb` file to confirm:

    ![](https://i.imgur.com/V9npkWW.png)



<br>

![wedo](http://i.imgur.com/6Kce0ca.png)
### Adding the Active Record Relationships (5 min)

We need to update our models to indicate the associations between them. For Muse, our models should look like so:

```ruby
# app/models/artist.rb
class Artist < ApplicationRecord
  has_many :songs
end

# app/models/song.rb
class Song < ApplicationRecord
  belongs_to :artist
end
```

Adding `has_many :songs` will complete the one-to-many relationship.

#### Dependent Destroy

What happens if we delete an `Artist`? The songs remain. This doesn't make sense right? If we delete an Artist then their Songs should be deleted too? Rails has a way to add this functionality:

```ruby
# models/artist.rb
class Artist < ApplicationRecord
  has_many :songs, dependent: :destroy
end
```


<br>

![wedo](http://i.imgur.com/6Kce0ca.png)

## Seed some Songs

Cool, like before, let me give you some song data to seed your database with songs:

1. Add this above your Artist seeds in db/seeds.rb to destroy all Artist instances:

	```ruby
	Artist.destroy_all 
```

1. Add this below your Artist seeds in db/seeds.rb:

	```ruby
Song.create(artist_id: rihanna.id, title: "Umbrella", genre: "Pop")
Song.create(artist_id: taylor.id, title: "Shake It Off", genre: "Pop")
Song.create(artist_id: billy.id, title: "Pressure", genre: "Rock")
Song.create(artist_id: drake.id, title: "Hotline Bling", genre: "Rap")
Song.create(artist_id: beyonce.id, title: "Lemonade", genre: "R&B")
```
3. `rails db:seed`

4. Cool, let's go into `rails c` and make sure that our database has our Songs:

	```ruby
	Song.all

	# Let's checkout  all of Rihanna's songs
	rihanna = Artist.first
	rihanna.songs
	```
	
	
> Why didn't we add a `Song.destroy_all`?

> Note - every time we run `rails db:seed` we'll destroy all the artists + songs, but the `:id` fields will still be sequential. We'd need to drop the database to start over at 1.

<br>

![wedo](http://i.imgur.com/6Kce0ca.png)

CRUD: Let's try it on our Song model
------------------------------


You can learn more about querying an Active Record model in the [Active Record
Query Interface](http://guides.rubyonrails.org/active_record_querying.html) guide.

## Create

### `.new` + `.save`

The cool thing about Active Record relationships is that now we can create a new `Song` directly through the `Artist` it belongs to:

```ruby
# Let's add the song Diamonds to Rihanna's songs array
rihanna = Artist.first
diamonds = rihanna.songs.new
diamonds.title = "Diamonds"
```
To save our instance to the database we use `.save`:

```ruby
diamonds.save
rihanna.songs
```

<br>

### `.create`
The `create` method will both instantiate and save a new record into the database:

```ruby
rihanna.songs.create(title: "Work")
```
The coolest part of this is that Active Record will add the appropriate **foreign key** `artist_id` field into the Song.

Also, what if you don't know the id of the Artist?

```ruby
only_girl = Song.create(artist_id: rihanna.id, title: "Only Girl")
```

<br>

## Read

```ruby
# return a collection with all songs for an Artist
rihanna.songs

# return the rihanna song titled "Diamonds"
rihanna.songs.find_by_title("Diamonds")

or

rihanna.songs.find_by(title: "Diamonds")
```

Or, what if we know the song title and want to find out who the Artist is?

```ruby
Song.find_by_title("Diamonds").artist.name
#=> Rihanna
```

Note... when we want to return all the artists or songs we use uppercase, as in `Song.all`. This is because we're asking for all the instances of the `Song` model/class.

When we want to access the songs for a given artist we use lowercase and plural, as in `rihanna.songs`.

<br>

## Update

```ruby
rihanna = Artist.first
diamonds = rihanna.songs.first
diamonds.update(genre: "Gospel")
```

<br>

## Delete

Likewise, once retrieved, an Active Record object can be destroyed which removes it from the database. 

Let's delete a `Song`:

```ruby
diamonds = rihanna.songs.first
diamonds.destroy
rihanna.songs 	#=> confirm that the song has been deleted
```

Remember the code `dependent: :destroy` that we added to the `Artist` model? That bit of code tells Active Record that if we delete an `Artist` it should also delete all the songs that belong to that `Artist`.

Let's see it in action. When we delete Rihanna all of her songs are deleted also.

```ruby
Artist.find_by_name("Rihanna").destroy

Artist.count
Song.count
```

Check out your `rails c` and note that Active Record is deleting both the Artist and her Songs.

<br>

![Imgur](http://i.imgur.com/WzTTdIe.jpg)

## Labtime

##### Part 1 - Using Active Record Associations

- Create 3 new Songs for an Artist of your choice
- Update a song's attribute
- Delete a song you created

##### Part 2 - Add a `Book` model for `Author`

- Walk back through this lesson and create a `Book` model
- Come up with 3 fields for the books table
- Add 2 sample books to your `db/seeds.rb` file
- Go into `rails c` and walk through the CRUD actions for a `Book`

<br>

![Imgur](http://i.imgur.com/wPefQjh.png)

## Conclusion (5 mins)

In this lesson we:

- Created a `Song` model for our Muse app
- Established a one-to-many relationship between `Artist` and `Song`
- Practiced CRUD with Active Record associations