Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:create, :show, :destroy] do
  resources :gifs 
    collection do
      post '/login', to: 'users#login'
      # users/login
    end
    # member do
    #   post '/login', to: 'users#login'
    #   # users/:id/login
    # end

  #   post '/users', to: 'users#create'
  #   get '/users/:id' to: 'users#show'
  #   delete '/users/:id', to 'users#destroy'
  #   get
  end

end
