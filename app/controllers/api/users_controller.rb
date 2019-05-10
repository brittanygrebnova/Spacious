class Api::UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def create
    user = User.create(user_params)
  end

  def show
    render json: current_user
  end

  def favorites
    parks = current_user.favorites
    render json: parks
  end

  def add_to_favorites
    current_user.favorites << park
    render json: current_user.favorites
  end


  def unfavorite
    park = Park.find(params[:id])
    current_user.favorites.delete(park)
    render json: current_user.favorites
  end

  private

  def user_params
    params.require(:user).permit(
        :username,
        :password,
        :password_confirmation,
        :firstname,
        :lastname
      )
  end

  def current_user
    current_user = User.find(params[:id])
  end

end
