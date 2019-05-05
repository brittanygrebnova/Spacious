class UserSerializer < ActiveModel::Serializer
  attributes :username, :firstname, :lastname

  has_many :favorite_parks
  has_many :favorited_by, through: :favorite_parks, source: :user
end
