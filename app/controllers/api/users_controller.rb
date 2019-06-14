class Api::UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def create
    user = User.create(user_params)
  end

  def show
    current_user = User.find(params[:id])
    render json: current_user
  end

  def favorites
    parks = current_user.favorites.uniq
    render json: parks
  end

  def add_to_favorites
    current_user = User.find(params[:id])
    park = Park.find_or_create_by(park_params)
    current_user.favorites << park unless current_user.favorites.include?(park)
    render json: current_user.favorites.uniq
  end


  def remove_from_favorites
    current_user = User.find(params[:id])
    park = Park.find_by(name: params[:park][:name])
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

  def park_params
    params.require(:park).permit(
      :name,
      :description,
      :url,
      :states
    )
  end

  # def current_user
  #   current_user = User.find(params[:id])
  # end

end
