Rails.application.routes.draw do
  root to: "users#landing_page"

  resources :parks
  resources :users
  
end
