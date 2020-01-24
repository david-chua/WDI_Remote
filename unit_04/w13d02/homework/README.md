# The Final Homework:

It's the final mile of the marathon. You made it.

Tonight you will continue to work on your Giphy app. If you need to catch up, take the time tonight to get as far as you can.

If you're caught up, let's try to explore some extra features. Take your pick, or tackle them all for Ultra Superstar status.

## Additional Features

### Feature 1: HomeController
- Add a HomeController. Edit your code so that 10 random saved Gifs display on the home page.
- Create a search bar that filters the giphys.
- :dart: commit -m "Commit 1: HomeController"

### Feature 2: Front to Back
- Edit your code so that you are making a server-side call to the Giphy API, and **remove** the front-side call to the Giphy API.
- You can use the [httpparty gem](https://github.com/jnunemaker/httparty) to make HTTP calls in Rails.
- :dart: commit -m "Commit 2: Front to Back"

### Feature 3: Favorite
- Update the Gif model (via migrations) to have a `favorite` property set to an Integer. On the front-end, the User should be able to favorite Gifs.
- Clicking on the 'favorite' button will make the favorite count go up. The same user can click on it again to un-favorite the gif.
- Use [font awesome](http://fontawesome.io/icons/) and make a heart icon (or whichever icon) clickable for this functionality. Buttons aren't the only thing that can have ng-clicks. Get creative.
- :dart: commit -m "Commit 3: Favorite"

### Feature 4: Add a 3rd model
- Add a `albums` model.
- A User has albums.
- An album has gifs.
- has_many :through?
- Update Angular so you can access gifs through Albums.
- Add CRUD to Albums.
- :dart: commit -m "Commit 4: Albums"

### Feature 5: Styling
- Polish up your app. Try to add a CSS Framework to make your app beautiful and responsive.
- Try creating "floating divs" on the page to add an extra layer of pizazz.
- Add a [Google Font](https://fonts.google.com/).
- Take screenshots of your page and add them in the Github issue.
- :dart: commit -m "Commit 5: Styling"

![image](http://www.corelangs.com/css/box/img/fullscreen.png)

### Feature 6: Animations
- Add CSS animations using [Animate.css](https://daneden.github.io/animate.css/), a "just add water" CSS animations library.
- :dart: commit -m "Commit 6: Animations"

### Feature 7: Validations
- Make all fields for the User **required fields**.
- Password requirements: define a method that checks to see a given password upon sign-up:
  - has at least 1 letter
  - has at least 1 number
  - is at least 8 characters long
  - is false otherwise and gives an error
- :dart: commit -m "Commit 7: Validations"

### Feature 8: Flash Messages
The flash is a special area of the session used for storing messages. Messages are written to the flash and cleared after being displayed to the user.
- a message is "flashed" to the user saying that the registration was succesful.
- a message is "flashed" saying that the credentials were invalid.
- [Rails Flash Docs](http://api.rubyonrails.org/classes/ActionDispatch/Flash.html) + a [blog post about this](https://medium.com/@joshuawcomeau/flash-messages-with-rails-and-angular-91d43f4517d1#.w8uksoua8)
- :dart: commit -m "Commit 8: Flash Messages"

### Feature 9: Deploy to Heroku
- Deploy your API and UI to heroku.
- Add those links to your Github Issue.
- :dart: commit -m "Commit 9: Deployed"

## Submitting Your Work

When you're ready, push the code to your fork on GitHub and create an issue with
a title in the format "YourGitHubUsername -- Week XX Day XX".
The issue body should have:

-   A link that points back to your fork.

-   A 'comfort' score on how you feel about the material, from 1 (very
    uncomfortable) to 5 (very comfortable)

-   A final comment reflecting your thoughts about the Unit, or WDIR altogether!
