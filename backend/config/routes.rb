Rails.application.routes.draw do
  resources :monsters
  resources :players
  resources :encounters
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
