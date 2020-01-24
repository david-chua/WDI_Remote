---
title: Rails API Active Record and `has_many_through` association
type: lesson
duration: 60 min
creator:
    name: Marc Wright
    city: WDIR
competencies: Programming

---

[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)




# Rails API Active Record `has_many_through` association

**Objectives**

- Create an Active Record has many through association
- Test out the API with Postman
- Use th Faker gem to create test data
- Deploy to Heroku
- Create an Angular Frontend to consume the API


**Prerequisites**

*You should already be able to:*

- Understand a Rails API
- Create a Rails API app with CRUD on at least one model

<br>


## Intro

#### YOU DO

Read sections 1 - 2 here: http://guides.rubyonrails.org/association_basics.html

<br>

## Active Record `has_many_through`
Last week we used active record to create a `has_many` and `belongs_to` relationship between our `Artist` and `Song` models. Active record gives us the ability to set-up many types of relationships. Today, we're gonna build a Rails API app to demo this relationship (http://guides.rubyonrails.org/association_basics.html#the-has-many-through-association): 

![](https://i.imgur.com/052pKOU.png)

We'll build Doctor, Patient and Appointment models. The `Appointment` model will contain both the `doctor_id` and `patient_id` foreign keys. This is how we will associate doctors and patients.


#### FYI - `has_and_belongs_to_many`

A has-and-belongs-to-many relationship is somewhat similar to what we'll be building today (http://guides.rubyonrails.org/association_basics.html#the-has-and-belongs-to-many-association). This is a way to set-up a relationship between two models via a join table. When should you use one vs the other?

> The simplest rule of thumb is that you should set up a has_many :through relationship if you need to work with the relationship model as an independent entity. If you don't need to do anything with the relationship model, it may be simpler to set up a has_and_belongs_to_many relationship (though you'll need to remember to create the joining table in the database).

> You should use has_many :through if you need validations, callbacks or extra attributes on the join model.

tl;dr - If you think your join table will/should contain business logic (i.e - more than just foreign keys) then go with a model.

<br>

## Sample app links

We'll be creating 2 seperate apps today just like last week. We'll create a Rails API backend and an Angular Font-end. Here are demos of both:

#### Frontend - Deployed on GH Pages
- Deployed Frontend: https://marcwright.github.io/rails5-api-angular-wdir2-demo-frontend

- Front-end GitHub repo: https://github.com/marcwright/rails5-api-angular-wdir2-demo-frontend/tree/gh-pages


#### Backend - Deployed Heroku
- Deployed Backend API: https://doctors-app-backend.herokuapp.com/appointments

    > Note: other endpoints are `/doctors` and `/patients`

- Back-end GitHub Repo: https://github.com/marcwright/rails5-api-angular-wdir2-demo-backend

#### Test the endpoints in Postman

Again, note that the `Appointment` model will contain both the `doctor_id` and `patient_id` foreign keys.

![](https://i.imgur.com/Qw2AGTU.png)

<br>

## Create the Rails API Doctors App
    

NOTE: Be sure to create this app outside your WDIR class folder. This app will need it's own `.git` since we're pushing to Heroku.

1. `rails new doctors-app-backend --api -d=postgresql -T` 
    - `--api` is the key, it will create a rails app without views
    - also make sure to add _api to your app name
2. `cd` && `atom .`
3. Add the following lines to `config/env/development.rb`, around line 44
    - The config folder stores your app configurations for different environments- most is done in app.rb
    - This will improve the error responses you receive to JSON requests
    - Will render an html page with debugging information
    - You could use :api instead of default to preserve the response format

    ```rb
    # Add Rails 4.2 serverside rendered errors
    config.debug_exception_response_format = :default
    ```
    
3. In your `Gemfile` uncomment out `gem 'rack-cors'` around line 26. 
4. In your `Gemfile` add `gem 'faker'`. We'll use this later on to seed our database in both localhost and production.
    - Read more about the faker gem at: https://github.com/stympy/faker
    - Where would you go to find the latest version of Ruby gems?
5. `bundle install`
4. Inside of `config/initializers/cors.rb`, uncomment the following:

    ```rb
    Rails.application.config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
    
        resource '*',
          headers: :any,
          methods: [:get, :post, :put, :patch, :delete, :options, :head]
      end
    end
    ```

    > We're pretty much uncommenting out the code and changing `origins` to `'*'`
    - you don't want to do this in a prod app, but it will be fine for our purposes today

6. `rails db:create db:migrate`

<br>

## Doctor Model CRUD

8. Doctor Model - `rails g model Doctor name specialty insurance:boolean gender`
    - Why don't I need to specify the `:type` for some of these fields?
    - What are the different field types that are available?

10. `rails db:migrate`


1. `config/routes.rb`

    ```rb
    Rails.application.routes.draw do
        resources :doctors
    end
```

20. `rails g controller doctors`

    ```rb
 class DoctorsController < ApplicationController

      def index
        render json: Doctor.all
      end
    
      def show
        render json: Doctor.find(params[:id])
      end
    
      def create
        doctor = Doctor.new(doctor_params)
    
        if doctor.save
          render json: doctor, status: :created, location: doctor
        else
          render json: doctor.errors, status: :unprocessable_entity
        end
      end
    
      def update
        doctor = Doctor.find(params[:id])
        if doctor.update(doctor_params)
          render json: doctor
        else
          render json: doctor.errors, status: :unprocessable_entity
        end
      end
    
      def destroy
        Doctor.find(params[:id]).destroy
    
        render json: {status: 204}
      end
    
      private
      
        def doctor_params
          params.require(:doctor).permit(:name, :specialty, :insurance, :gender)
        end
    end
```

1. `rails s`
2. Use Postman to test each method

<br>

![youdo](http://i.imgur.com/ylb6WX9.gif)

## You Do - Patient Model CRUD

Using `Doctor` as an example, create CRUD for a `Patient`.

- Create a model with the following fields
    
    ![](https://i.imgur.com/5s3Fosx.png)
    
- Add a route
- Create a controller
- Create the 5 CRUD methods
- Use Postman to test each method

<br>

## Appointment CRUD

7. `rails g model Appointment location day reason doctor:references patient:references`

1. `rails db:migrate`

1. `config/routes.rb`

    ```rb
    Rails.application.routes.draw do
        resources :doctors
        resources :patients
        resources :appointments
        get '/get_all', to: 'appointments#get_all'
    end
```

1. `rails g controller appointments`
    
    ```ruby
    class AppointmentsController < ApplicationController

      # An optional method for when we wire up Angular
      def get_all
        render json: {patients: Patient.all, doctors: Doctor.all, appointments: Appointment.all}
      end
    
      def index
        render json: Appointment.all
      end
    
      def show
        render json: Appointment.find(params[:id])
      end
    
      def create
        appointment = Appointment.new(appointment_params)
    
        if appointment.save
          render json: appointment, status: :created, location: appointment
        else
          render json: appointment.errors, status: :unprocessable_entity
        end
      end
    
      def update
        appointment = Appointment.find(params[:id])
        if appointment.update(appointment_params)
          render json: appointment
        else
          render json: appointment.errors, status: :unprocessable_entity
        end
      end
    
      def destroy
        Appointment.find(params[:id]).destroy
        render json: {status: 204}
      end
    
      private
    
        def appointment_params
          params.require(:appointment).permit(:location, :day, :reason, :doctor_id, :patient_id)
        end
    end
    ```



3. Postman - Create

    ![](https://i.imgur.com/0GRG0xA.png)
    
<br>

## Add the Active Record association methods

1. `models/doctor.rb`

    ```rb
    class Doctor < ApplicationRecord
      has_many :appointments, dependent: :destroy
      has_many :patients, through: :appointments
      validates :name, presence: true, uniqueness: true
    end
```

9. `models/patient.rb`

    ```rb
    class Patient < ApplicationRecord
      has_many :appointments
      has_many :doctors, through: :appointments
      validates :name, presence: true, uniqueness: true
    end
    ```
7. `models/appointment.rb`

    ```rb
    class Appointment < ApplicationRecord
      belongs_to :doctor
      belongs_to :patient
    end
```
> Rails added the `belongs_to` since we used `:references`

11. In a new tab, enter `rails c`

<br>

![youdo](http://i.imgur.com/ylb6WX9.gif)

## You Do - Test the Associations

#### Create instances of a Patient, Doctor, Appointment 

```ruby
patient = Patient.create(name: "Schmitty", insurance_co: "Anthem", gender: "M", new_patient: true)

doctor = Doctor.create(name: "Dr. Robert", specialty: "feet", insurance: true, gender: "M")

appointment_one = Appointment.create(location: "Grady General", day: "Monday", reason: "smelly feet", doctor_id: 1, patient_id: 1)

doctor.patients or patient.doctors

patient.appointments or doctor.appointments
```

> We can now access a Doctor's Patients and vice-versa through Appointments

#### Create new Patients and Doctors through Appointments

```ruby
patient1 = doctor.patients.create(name: "Diesel", insurance_co: "Blue Cross", gender: "M", new_patient: false)

doctor1 = patient.doctors.create(name: "Dr. Foster", specialty: "Veterinary", gender: "M")

patient1.appointments.create(APPOINMENT ATTRIBUTE DETAILS HERE) or doctor1.appointments.create(APPOINMENT ATTRIBUTE DETAILS HERE)

appointment_two = Appointment.create(location: "Inman Park", day: "Friday", reason: "shots", doctor_id: doctor.id, patient_id: patient.id)
```

#### Test it in Postman

1. Postman - Get

    ![](https://i.imgur.com/GE4DPV0.png)

   > Make sure that `raw` is set to `JSON(application/json)`

1. Postman - Update/Put

    ![](https://i.imgur.com/HNAJJmw.png)

1. Postman - Delete/Delete
2. Postman - Read/Index-Show

<br>

## Using the Faker gem

1. Add to `db/seeds.rb`

    ```rb
Appointment.destroy_all
Patient.destroy_all
Doctor.destroy_all

    10.times do
        Patient.create(name: Faker::Name.name, insurance_co: Faker::Beer.malts, gender: "F", new_patient: Faker::Boolean.boolean)
        Doctor.create(name: Faker::Name.name, specialty: Faker::Hipster.word, gender: "F", insurance: Faker::Boolean.boolean)
    end

    10.times do
        Appointment.create(location: Faker::University.name, day: Faker::Date.forward(23), reason: Faker::Hipster.sentence(6), patient_id: Faker::Number.between(1, 10), doctor_id: Faker::Number.between(1, 10))
    end
```
1. `rails db:reset`

> Note: This will drop the local databases, recreate, migrate and seed 

<br>

## Heroku Rails API Deployment

1. `git init`, `git add -A`, `git commit -m "First Commit"`
1. `heroku create`
2. `git push heroku master`
2. `heroku run rails db:migrate`

#### Add data through the Heroku Rails Console

3. `heroku run console`

```ruby
patient = Patient.create(name: "Schmitty", insurance_co: "Anthem", gender: "M", new_patient: true)

doctor = Doctor.create(name: "Dr. Robert", specialty: "feet", insurance: true, gender: "M")

appointment_one = Appointment.create(location: "Grady General", day: "Monday", reason: "smelly feet", doctor_id: 1, patient_id: 1)

doctor.patients.create(name: "Diesel", insurance_co: "Blue Cross", gender: "M", new_patient: false)

patient.doctors.create(name: "Dr. Foster", specialty: "Veterinary", gender: "M")

appointment_two = Appointment.create(location: "Inman Park", day: "Friday", reason: "shots", doctor_id: doctor.id, patient_id: patient.id)
```


#### To use `seeds.rb`

2. `heroku pg:reset DATABASE` (if you want to completely reset your db)
3. `heroku run rails db:migrate`
1. `heroku run rails db:seed`

#### Test out the API with Postman

1. `<NAME_ OF_YOUR_HEROKU_APP_HERE>/patients`
2. `<NAME_ OF_YOUR_HEROKU_APP_HERE>/doctors`
3. Try to add a new Patient.

    ![](https://i.imgur.com/4kSSM74.png)
    
1. Try to add an Appointment.

    ![](https://i.imgur.com/4Njvh1t.png)  

<br>

## Angular Front-end

1. `mkdir doctors-app-frontend` && `cd` into it
2. `npm init -y`
    - will fill in all of the angular questions
4. `touch server.js`

    ```js
    var express = require('express');
    var app     = express();
    var path    = require('path');

    app.use(express.static(path.join(__dirname,'public')));

    app.get('/', function(req, res){
        res.render('index');
    });
    
    var port = process.env.PORT || 4000;
    
    app.listen(port, function(){
        console.log("app listening on port 4000");
    });
    ```
    
1. `npm install --save express path`
2. `mkdir public`
1. `mkdir public/js`
1. `touch public/js/app.js`

    ```js
  angular.module('Rails5', []);
```

1. `touch public/js/rails5Controller.js`

    ```js
  angular.module('Rails5')
     .controller('rails5Controller', rails5Controller);
    
    
  function rails5Controller($http){
    
        var self = this;        
        var server = "<YOUR_HEROKU_API_LINK_HERE>"
        // For example, var server = 'https://enigmatic-garden-65625.herokuapp.com/'
        
        self.doctors = [];
        
        $http.get(`${server}/doctors`)
          .then(function(response) {
              console.log(self.doctors[0].name);
              return self.doctors = response.data;
        });
  }
``` 

1. `touch public/index.html`
    - to see the doctors on the index.html page

    ```html
    <!DOCTYPE html>
    <html ng-app="Rails5">
      <head>
        <meta charset="utf-8">
        <title>Rails 5 API App</title>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
        <script src='js/app.js'></script>
        <script src='js/rails5Controller.js'></script>
      </head>
      <body ng-controller="rails5Controller as rails">
        <h1>Doctors</h1>
        <ul ng-repeat="doctor in rails.doctors">
            <li>{{doctor.name}}</li>
            <li>{{doctor.specialty}}</li>
            <li>{{doctor.insurance}}</li>    
        </ul>
        {{1 + 1}}
      </body>
    </html>
    ```
1. Following that same structure, show the appointments and patients on the index page

1. `touch Procfile` - `web: node server.js`
    - to deploy to heroku

1. run `nodemon server.js`
    - open localhost:4000



<br>

![Imgur](http://i.imgur.com/WzTTdIe.jpg)

## Labtime

- Add a form that will allow you to create an Appointment
- Render a list of the appointment info
- Add Bootstrap or the front-end framework of your choice
- Deploy your Node/Express backend to Heroku

<br>

![Imgur](http://i.imgur.com/wPefQjh.png)

## Conclusion

In this lesson we:

- Created a Rails API with a has_many_through_association
- Added the faker gem
- Deployed our Rails API to Heroku

<br>
---------------

<details>
<summary>Patient CRUD</summary>

9. Patient - `rails g model Patient name insurance_co gender new_patient:boolean`

1. `config/routes.rb`

    ```rb
    Rails.application.routes.draw do
        resources :doctors
        resources :patients
    end
```

1. `rails db:migrate`

3. `rails g controller patients`

    ```rb
  class PatientsController < ApplicationController
      def index
        render json: Patient.all
      end
    
      def show
        render json: Patient.find(params[:id])
      end
    
      def create
        patient = Patient.new(patient_params)
    
        if patient.save
          render json: patient, status: :created, location: patient
        else
          render json: patient.errors, status: :unprocessable_entity
        end
      end
    
      def update
        patient = Patient.find(params[:id])
        if patient.update(patient_params)
          render json: patient
        else
          render json: patient.errors, status: :unprocessable_entity
        end
      end
    
      def destroy
        Patient.find(params[:id]).destroy
        render json: {status: 204}
      end
    
      private
      
        def patient_params
          params.require(:patient).permit(:name, :new_patient, :insurance_co, :gender)
        end
    end
```

</details>





