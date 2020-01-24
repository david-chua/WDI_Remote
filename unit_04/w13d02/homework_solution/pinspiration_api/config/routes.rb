Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "boards#index"
  resources :boards do
    resources :pins
  end
end

# Prefix Verb   URI Pattern                          Controller#Action
#   root GET    /                                    boards#index
# board_pins GET    /boards/:board_id/pins(.:format)     pins#index
#        POST   /boards/:board_id/pins(.:format)     pins#create
# board_pin GET    /boards/:board_id/pins/:id(.:format) pins#show
#        PATCH  /boards/:board_id/pins/:id(.:format) pins#update
#        PUT    /boards/:board_id/pins/:id(.:format) pins#update
#        DELETE /boards/:board_id/pins/:id(.:format) pins#destroy
# boards GET    /boards(.:format)                    boards#index
#        POST   /boards(.:format)                    boards#create
#  board GET    /boards/:id(.:format)                boards#show
#        PATCH  /boards/:id(.:format)                boards#update
#        PUT    /boards/:id(.:format)                boards#update
#        DELETE /boards/:id(.:format)                boards#destroy
