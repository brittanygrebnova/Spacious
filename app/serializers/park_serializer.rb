class ParkSerializer < ActiveModel::Serializer
  attributes :name, :state, :park_id, :description, :directions_url, :url

  has_many :favorite_parks
  has_many :favorited_by, through: :favorite_parks, source: :user
end
