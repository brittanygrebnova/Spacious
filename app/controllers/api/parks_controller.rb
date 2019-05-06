class Api::ParksController < ApplicationController

  def index
    parks = Park.all
    render json: parks
  end

  def show
    park = Park.find(params[:park][:park_code])
    render json: park
  end

  def favorite
    type = params[:type]
    park = params[:park]
    if type == "favorite"
      current_user.favorites << park
      render json: current_user.favorites

    elsif type == "unfavorite"
      current_user.favorites.delete(park)
      render json: current_user.favorites

    else
      # Type missing, nothing happens
      redirect_to :index
    end
  end

end
