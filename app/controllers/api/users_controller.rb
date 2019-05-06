class Api::UsersController < ApplicationController

  def new
    user = User.new
  end

  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
    end
  end

  def show
    render json: get_current_user
  end


  private

  def user_params
    params.require(:user).permit(:firstname, :lastname, :username)
  end

  def get_current_user
    User.find(session[:user_id])
  end


end
