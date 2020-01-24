[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider a specific example: a laptop. Suppose that you need to represent
a laptop in an application. What attributes are most important to include in our
data model?

As it turns out, the answer to that question depends heavily on what the
application will do and how it will be used. If the application is for selling
laptops, we might be pick the following attributes.

  > A Laptop has...
  > - a sale price
  > - a brand name
  > - an amount of RAM, in GB
  > - a disc size, in GB
  > - a processor speed, in GHz
  > - a monitor size, in inches
  >
  > e.g.

  ```js
  laptop = {
    salePrice: 1000,
    brand: 'Lenovo',
    RAM: 8,
    disc: 60,
    processor: 2.5,
    monitorSize: 12
  }
  ```

However, if the application will be used for _manufacturing laptops_,
things like sale price suddenly become much less relevant; instead, a laptop in
that kind of app might have information about materials costs, % completion,
or the factory and assembly line on which the laptop was built.

Take a look at each of the app descriptions below. For each description,
create a rough data model for the app by listing at least two relevant
entities/abstractions (e.g. Laptop, above) that the app might use, and giving
them each several properties that make sense for that use case.
Please also give a short explanation (1 - 2 sentences) of why these choices make
sense for the use case of the app.

### 1. To-Do List

This app will be an app for tracking and managing tasks. Not only will it keep
track of whether tasks have been completed, it will also keep track of
how long each task took to complete. Tasks can be grouped into 'projects' to
keep them organized.

> //To Do List app = {
//      TaskName:
//      ProjectType:
//      TaskIntendedLength:
//      TaskActualLength:
//      TaskStatus:  
//      }
//    
//
//    I added the Task name as the main branch as the because we want to
//    develop an app which lists the task and be able to group it into 'projects'
//    in this case, i made 'projects' as 'ProjectType'. I added 'TaskActualLength'
//    in order to show how long it actually took to set finish the task. I added
//    an extra 'TaskIntendedLength' in order for the user to be able to
//    write a time in which they want to dedicate for the specific 'TaskName'.
//    I think it would be helpful in giving them a guideline and get better with
//    time management.

### 2. Photo Sharing App

In this app, users can upload photos to their accounts and share them with others. These photos can be grouped into albums.

> Photo Sharing app = {
//    UserName:
//    Album:
//    Date:
//    Tag:
//    }
//
// Then we can create a share button which would then have a form in which it
// can ask whether to share publicly, or individually as well as a cancel button.
//
// In terms of developing the entities, I added 'UserName' which would be the main
// user. The 'Album' will be another to name the full album. 'Date' would be to add
// dates in which a user can easily go to a specific date and see the photos in
// that time. Tag will be to easily capture specific photos with similar tags
// like "selfies" or "gymlife".
//
//

### 3. Home Automation Manager

This app will be a tool for managing a home automation system; it will keep
track of the time and temperature of the house that it monitors, and use that
information to turn on and off different lights and adjust the thermostat up
and down.

>HomeAutomationManager = {
//  TypeofMachine:
//  Room:
//
// Then we would run a loop using the 'TypeofMachine' objects and room using
// different conditions.
// If TypeofMachine = lights  
//  for (i = 0, i >= 15|| i <=24, i++)
//    do a turn on command.
//  else do a turn off command.
// IF TypeofMachine = thermostat
    for (i = 65, i >=80|| i < 60)
    turn off thermostat.
    else turn on.

### 4. Sneaker Store

This app will allow customers to browse a list of products (sneakers, in this
case), add those products to a cart, and save that cart as a past order once the
purchase is complete.

> SneakerAccount = {
  PastOrder:
  SavedCart:
  CurrentCart:
}
> Sneakers = {
  Brand:
  Name:
  ModelNumber:
  Colorway:
  Size:
}
//
// In terms of the 'Sneakers', we want to be able to have those entities in order
// to quickly identify the specific brand and name of the shoe as well as the
// 'Size' and 'Colorway'. In terms of the 'SneakerAccount', we want to be able to keep
// a history of what a customer has bought. Along with that, we want to be able
// to move 'CurrentCart' and 'SavedCart' into 'PastOrder' if a customer has
// decided to buy the 'Sneakers'.

## Representing Abstractions in Code

Once you've chosen the abstractions that your app will use, the next step is to
figure out how to actually represent those abstractions in code. The same
abstraction can often be represented in multiple different ways, and there may
be trade-offs in speed and simplicity that come from using one representation
vs another.

### 5. Subway System

Suppose that you're building an app that tells travelers how many stops they
need to travel to get from one station to another. Two abstractions that you
decide to use to model your application's data are Stations and Rail Lines, with
the following properties:

A Station has:
-   a name
-   a description

A Rail Line has:
-   a name
-   a set of stations that it hits

The team has decided to represent these abstractions in the following way.

```js
// Station
var exampleStation = {
  name: 'Downtown Crossing',
  description: "Downtown Crossing is a shopping district that is a small part of downtown Boston, Massachusetts, located due east of Boston Common and west of the Financial District..."
};

// Rail Line
var exampleLine = {
  name: 'Green Line',
  northStation: {
    name: 'North Station',
    description: "North Station is a major transportation hub located at Causeway and Nashua Streets in Boston, Massachusetts, United States...."
  },
  haymarket: {
    name: 'Haymarket',
    description: "Haymarket is an MBTA subway station serving the Green and Orange lines, located at the corner of Congress and New Sudbury streets in downtown Boston, Massachusetts...."
  },
  governmentCenter: {
    name: 'Government Center',
    description: "Government Center is an area in downtown Boston, centered on City Hall Plaza. Formerly the site of Scollay Square, it is now the location of Boston City Hall..."
  }
};

// Stop and line descriptions from Wikipedia (https://en.wikipedia.org)
```

What are some advantages and disadvantages of choosing these representations? Please give at least one example of each.

> For a single track line, I see the advantage is that it will be simple enough to go through each rail line and be
able to move through the lines pretty easily. However, once the lines starts branching off into different Rail line, it might be hard
to code that if someone is traveling from one rail line to the next. It will be confusing because one rail line will only go
up to what stops listed in its data. It won't be able to count outside data if it needs to move Rail lines.

### 6. Doctor Appointment App

Consider an app for helping patients and doctors schedule appointments.

A Patient has:
-   a given name
-   a surname
-   a date of birth

A Doctor has:
-   a given name
-   a surname
-   a specialty
-   an address

An Appointment has:
-   a date
-   a time

The team has not yet decided how to represent the relationship between doctors,
patients, and appointments, so they've put together two different
alternatives.

#### Option 1

```js
var examplePatient = {
  givenName: 'John',
  surname: 'Doe',
  dateOfBirth: '1992-11-03'
};
var exampleAppointment = {
  date: '2016-12-15',
  time: '13:00',
  patient: {
    givenName: 'Jane',
    surname: 'Doe',
    dateOfBirth: '1980-06-13'
  }
};
var exampleDoctor = {
  givenName: 'Alphonse',
  surname: 'Cula',
  specialty: 'phlebotomy',
  appointments: [
    {
      date: '2015-10-31',
      time: '00:00',
      patient: {
        givenName: 'Lucy',
        surname: 'Westenra',
        dateOfBirth: '1976-06-06'
      }
    },
    {
      date: '2016-10-31',
      time: '00:00',
      patient: {
        givenName: 'Mina',
        surname: 'Murray',
        dateOfBirth: '1989-09-09'
      }
    }
  ]
};
```

#### Option 2

```js
var exampleDoctor = {
  givenName: 'John',
  surname: 'Dorian',
  specialty: 'internal medicine'
};
var examplePatient = {
  givenName: 'Jordan',
  surname: 'Sullivan',
  dateOfBirth: '1978-12-01'
};
var exampleAppointment = {
  date: '2009-04-15',
  time: '19:00',
  doctor: {
    givenName: 'Jan',
    surname: 'Itor',
    specialty: 'psychology'
  },
  patient: {
    givenName: 'Ladinia',
    surname: 'Williams',
    dateOfBirth: '1980-01-01',
  }
}
```

What are some relative advantages and disadvantages of each representation?
Under what circumstances might one representation be a better choice than the
other? Are there any circumstances in which the other representation might be
the better choice?

> The second choice would have an advantage for being a clearer output in terms of listing the
appointment time followed by the doctor and patient. However, it would be a lot of
in put when having multiple patients on the same time. For the first choice, it will be
easier as you will just need to find the doctor and add the patient and appointment info.
I think that the first choice is a lot clearer overall in terms of practicality, but if you want to be
more personal to the patient, having the second choice will look better in terms of having an output .

## Tying It Together

### 7. Tic-Tac-Toe

You've been tasked with building an in-browser tic-tac-toe game.

a.  What are some possible entities that your application might use to model its
    data? Please pick at least two, with at least two properties apiece.

  > Choice: {X,O}
    Space: {1,2,3,4,5,6,7,8,9}

b.  How might those entities be represented in JavaScript code?

  > Objects, Arrays.
  > Then the functions can be done using for loops and while loops in order to find the winnner

c.  Justify your choices in a) and b). Why these entities? Why these
    representations?

  > The entities can be represented using loops in terms of having the 'Space' be
  filled with the different 'Choice' options. While the Space can be a source of how
  the loops terminate such as having three of the choices fill the same paces
  in a row, diagonal, or column.
