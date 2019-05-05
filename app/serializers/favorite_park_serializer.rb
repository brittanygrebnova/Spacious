class FavoriteParkSerializer < ActiveModel::Serializer
  attributes :user_id, :park_id

  belongs_to :user
  belongs_to :park
end
