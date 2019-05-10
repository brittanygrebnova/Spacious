class Api::UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def favorites
    parks = current_user.favorites
    render json: parks
  end

  def create
    user = User.create(user_params)
  end

  def login
    user = User.find_by(username: params[:username])
  end

  def show
    render json: get_current_user
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

end
