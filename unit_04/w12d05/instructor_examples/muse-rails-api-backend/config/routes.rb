Rails.application.routes.draw do
  resources :artists

  post 'artists/:id/songs', to: 'artists#new_song'
end
