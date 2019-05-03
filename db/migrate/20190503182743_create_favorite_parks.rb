class CreateFavoriteParks < ActiveRecord::Migration[5.2]
  def change
    create_table :favorite_parks do |t|
      t.integer :park_id
      t.integer :user_id

      t.timestamps
    end
  end
end
