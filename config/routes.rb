Rails.application.routes.draw do

  namespace :api do

    get 'user', to: 'users#show', as: 'user_show'
    post 'signup', to: 'users#create', as: 'user_signup'
    post 'login', to: 'users#login', as: 'user_login'

    resources :users do
      get :favorites, on: :member
      post :add_to_favorites, on: :member
      post :unfavorite, on: :member
    end

    resources :parks do
      get :favorited_by, on: :member
    end

  end

end
