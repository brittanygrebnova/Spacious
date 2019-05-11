class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :firstname, :lastname

  has_many :favorite_parks
  has_many :favorites, through: :favorite_parks, source: :park
end
