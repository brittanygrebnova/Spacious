class ChangeAddressToStateInParks < ActiveRecord::Migration[5.2]
  def change
    rename_column :parks, :address, :state 
  end
end
