---
title: Angular with Rails API
type: lesson
duration: 60 min
creator:
    name: Marc Wright
    city: WDIR
competencies: Programming

---

[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)


# Angular with Rails API

<br>

##Intro

So far, we talked about Postgresql, Active Record associations and basic CRUD on 2 models. We've also build a Rails API backend with full CRUD that sends and receives JSON. 

The final step to complete our Muse app will be to create a Node/Express/Angular front-end that consumes our Rails API back-end. The idea is that anyone can use our Muse API data endpoints. We'll create a seperate Node/Express/Angular app to consume our Rails API.

Here's a finished demo version of the Muse app (we won't completely finish it today): https://wdir-muse.herokuapp.com/

<br>

![youdo](http://i.imgur.com/ylb6WX9.gif)

## You Do - Set up Angular App


Scaffold a Node/Express/Angular app given the following:


#### Part 1
- The Angular app name is `museApp`
- The controller name is `MuseController`
- The controller has a `getArtists` function
- The `getArtists` function should hit the Rails API endpoint `localhost:3000/artists` and return all artists from the database
- Create an `index.html`
- `console.log` all the artists from the database in the browser console

#### Part 2

- Add `ui.router` (you can add the router using a `.config()` in your `app.js` file)
- Create a state of `artists`
- The state should render an `artists.html` partial view that displays a table of artists
- Add a basic navbar for `artists` and `new artist` states

<br>

#### Angular Intro Lesson: https://github.com/ga-students/wdi-remote-matey/blob/master/unit_03/w09d03/instructor_notes/angular_intro.md

#### UI-Router Lesson: https://github.com/ga-students/wdi-remote-matey/blob/master/unit_03/w09d05/instructor_notes/angular-ui-router.md

<br>

##### Here is what your folder structure should look like:

![](https://i.imgur.com/gfYxF5S.png)

<br>

##### Here is the artists view and a console.log of the artists:

![](https://i.imgur.com/T9A9cs1.png)

<br>

## Angular views

### Artist Index

1. `public/partials/artists.html`

    ```html
    <table>
      <tr>
        <th>Artist</th>
        <th>Image</th>
        <th>Albums</th>
        <th>Hometown</th>
        <th>Show</th>
      </tr>
    
      <tr ng-repeat="artist in muse.artists">
        <td><a ng-click="muse.getShow(artist)">{{artist.name}}</a></td>
        <td><img ng-src="{{artist.img}}"/></td>
        <td>{{artist.albums}}</td>
        <td>{{artist.hometown}}</td>
        <td><a ng-click="muse.getShow(artist)">SHOW</a></td>
      </tr>
    </table>
    ```
1. Add a state

    ```js
    .state('artists', {
      url: "/artists",
      templateUrl: "/partials/artists.html",
    });
    ```



<br>

### Artist Show

1. `public/partials/show.html`

    ```html
    <p>{{muse.artist.name}}</p>
    <p><img ng-src="{{muse.artist.img}}"/></p>
    <p>{{muse.artist.albums}}</p>
    <p>{{muse.artist.hometown}}</p>
    ```
1. Add a state

    ```js
    .state('artistShow', {
      url: "/artists/{artistId}",
      templateUrl: "/partials/show.html",
    });
    ```
1. Add to our `museController.js`

    ```js
  function getShow(artist){
      var artistToFind = artist;
      
      // To grab the specific artist from the artists array
      self.artist = self.artists.find(function(artist){
        return artist.id === artistToFind.id;
      });
      
      $state.go('artistShow', {artistId: artist.id});
  }     
    ...
    
    self.getShow = getShow;
    ```
Also, don't forget to inject `$state` into your controller function.


<br>


### Artist New

1. `public/partials/new-artist.html`

    ```html
    <h3>Add New Artist</h3>
    
    <form ng-submit='muse.addArtist()'>
      <div>
        <label>Artist's Name</label>
        <input type="text" placeholder="Bono" ng-model='muse.newArtist.name'>
      </div>
      <div>
        <label>Hometown</label>
        <input type="text" placeholder="Riverside" ng-model='muse.newArtist.hometown'>
      </div>
      <div>
        <label>Image</label>
        <input type="text" placeholder="image url" ng-model='muse.newArtist.img'>
      </div>
    
      <div>
        <input type="submit" value="Add Artist">
      </div>
    </form>
    ```
1. Add a state

    ```js
    .state('newArtist', {
      url: "/new-artist",
      templateUrl: "/partials/new-artist.html",
    })
    ```
1. Add to our `museController.js`

    ```js
    function addArtist(){
      $http.post(`http://localhost:3000/artists`, self.newArtist)
        .then(function(response) {
          self.artists.push(response.data);
          self.newArtist = {};

          $state.go('artists');
      });
    }    
    
    ...
    
    self.addArtist = addArtist;
    ```
    
<br>

### Artist Edit  
1. `public/partials/edit-artist.html`

    ```html
    <h3>Edit Artist</h3>

    <form ng-submit='muse.updateArtist(muse.artist)'>
      <div>
        <label>Artist's Name</label>
        <input type="text" placeholder="Bono" ng-model='muse.artist.name'>
      </div>
      <div>
        <label>Hometown</label>
        <input type="text" placeholder="Riverside" ng-model='muse.artist.hometown'>
      </div>
      <div>
        <label>Image</label>
        <input type="text" placeholder="image url" ng-model='muse.artist.img'>
      </div>
    
      <div>
        <input type="submit" value="Update Artist">
      </div>
    </form>
    ```

1. Add a state

    ```js
    .state('editArtist', {
      url: "/artists/{artistId}/edit",
      templateUrl: "/partials/edit-artist.html",
    })
    ```

1. Add a function to populate our edit form inside `museController.js`

    ```js
    function populateArtistData(artist){
      $state.go('editArtist', { artistId: artist.id })
    }  
    ...
    
   self.populateArtistData = populateArtistData;
    ```  

1. `public/partials/artists.html`

    ```html
    <td><a ng-click="muse.populateArtistData(artist)">Edit</a></td>
    ```  
    
<br>

### Artist Update

1. Add to our `museController.js`

    ```js
    function updateArtist(artist){
      $http.put(`http://localhost:3000/artists/${artist.id}`, artist)
        .then(function(response) {
          $state.go('artists');
      });
    }    
    
    ...
    
    self.updateArtist = updateArtist;
    ```
    
<br>

### Artist Delete

1. `public/partials/artists.html`

    ```html
    <td><a ng-click="muse.deleteArtist(artist)">Delete</a></td>
    ```
    
1. Add to our `museController.js`

    ```js
   function deleteArtist(artist) {
     $http.delete(`http://localhost:3000/artists/${artist.id}`, artist)
      .then(function(response) {
        console.log(response.data);
        self.artists = response.data;

        $state.go('artists');
      });
    }
      
  ...
  
  self.deleteArtist = deleteArtist;
    ```
    
<br>



## Independent Practice

- Add full CRUD for an Artist's songs
- Add the [Materialize](http://materializecss.com/) front-end framework for styling
- Add a nicer Navbar
- Deploy to [Heroku](http://heroku.com/)
- Try to ping the Spotify API to grab the image of an artist

<br>

<details>
    <summary>Angular App</summary>
    
Angular Front-end

1. `mkdir muse-angular-frontend` && `cd` into it
2. `npm init -y`
    - will fill in all of the angular questions
4. `touch server.js`

    ```js
    var express = require('express');
    var app     = express();

    app.use(express.static('public'));

    app.get('/', function(req, res){
        res.render('index');
    });

    app.listen(4000, function(){
        console.log("app listening on port 4000");
    });
    ```
    
1. `npm install --save express`
2. `mkdir public`
1. `mkdir public/js`
1. `touch public/js/app.js`

    ```js
angular.module('museApp', []);
```

1. `touch public/js/museController.js`

    ```js
    angular.module('museApp')
      .controller('MuseController', MuseController);
    
    function MuseController($http){
      var self = this;
      self.artists = [];
    
      function getArtists(){
        $http.get(`http://localhost:3000/artists`)
          .then(function(response) {
            console.log(response.data);
            self.artists = response.data;
        });
      };
    
      getArtists();
    
      self.getArtists = getArtists;
    }
``` 

1. `touch public/index.html`
    - To render the Artists on the index.html page

    ```html
    <!DOCTYPE html>
    <html ng-app="museApp">
      <head>
        <title>Muse</title>
    
        <!--  Scripts-->
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.js"></script>
    
        <script src='js/app.js'></script>
        <script src='js/museController.js'></script>
        
        <style>
          img {
            width: 100px;
            height: 100px
          }
        </style>
    
  
      </head>
      <body ng-controller="MuseController as muse">
        <nav>
            <ul>
                <li><a ui-sref-active="active" ui-sref="artists">Artists</a></li>
                <li><a ui-sref-active="active" ui-sref="newArtist">New Artist</a></li>
            </ul>
        </nav>
        
        <ui-view></ui-view>
    
      </body>
    </html>
    ```
1. `mkdir public/partials`
2. `touch public/partials/artists.html`

    ```html
    <table>
      <tr>
        <th>Artist</th>
        <th>Image</th>
        <th>Albums</th>
        <th>Hometown</th>
        <th>Show</th>
      </tr>
    
      <tr ng-repeat="artist in muse.artists">
        <td><a ng-click="muse.getShow(artist)">{{artist.name}}</a></td>
        <td><img ng-src="{{artist.img}}"/></td>
        <td>{{artist.albums}}</td>
        <td>{{artist.hometown}}</td>
        <td><a ng-click="muse.getShow(artist)">SHOW</a></td>    
      </tr>
    </table>
```

1. Add a route using `ui.router`

    ```js
    angular.module('museApp', ['ui.router'])
        .config(MuseRouter);

    MuseRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    
    function MuseRouter($stateProvider, $urlRouterProvider, $locationProvider) {
    
      $urlRouterProvider.otherwise('/artists');
    
      $stateProvider
        .state('artists', {
          url: "/artists",
          templateUrl: "/partials/artists.html",
        });
    
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
    }
```
</details>
