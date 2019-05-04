class AddAllApiInfoToParksAsAttrs < ActiveRecord::Migration[5.2]
  def change
    add_column :parks, :directions_url, :string
    add_column :parks, :url, :string
  end
end
