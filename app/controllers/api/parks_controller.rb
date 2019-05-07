class Api::ParksController < ApplicationController

  def index
    parks = Park.all
    render json: parks
  end

  def show
    park = Park.find(params[:id])
    render json: park
  end

  def add_to_favorites
    park = Park.find(params[:id])
    current_user.favorites << park
    render json: current_user.favorites
  end


  def unfavorite
    park = Park.find(params[:id])
    current_user.favorites.delete(park)
    render json: current_user.favorites
  end

  def favorites
    parks = current_user.favorites
    render json: parks
  end

  private

end
