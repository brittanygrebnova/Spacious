class User < ApplicationRecord
  has_secure_password
  validates :username, :firstname, :lastname, :presence => true
  validates :username, :uniqueness => true

  has_many :favorite_parks
  has_many :favorites, through: :favorite_parks, source: :park
end
