class Api::ParksController < ApplicationController

  def index
    parks = Park.all
    render json: parks
  end

  def show
    park = Park.find(params[:id])
    render json: park
  end

  def favorited_by
    park = Park.find(params[:id])
    render json: park.favorited_by
  end


end
