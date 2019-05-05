Rails.application.routes.draw do
  root to: "users#landing_page"

  resources :parks do
    put :favorite, on: :member
  end

  resources :users
  
end
