Rails.application.routes.draw do
  root to: "sessions#new"

  resources :parks do
    put :favorite, on: :member
  end

  resources :users

end
