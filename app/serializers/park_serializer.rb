class ParkSerializer < ActiveModel::Serializer
  attributes :name, :states, :park_id, :description, :directions_url, :url

  has_many :favorited_by, through: :favorite_parks, source: :user
end
