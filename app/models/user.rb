class User < ApplicationRecord
  has_secure_password
  
  has_many :favorite_parks
  has_many :favorites, through: :favorite_parks, source: :park
end
