class AddCodeToParks < ActiveRecord::Migration[5.2]
  def change
    add_column :parks, :park_code, :string
  end
end
