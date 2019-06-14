class ChangeParksStateColumnName < ActiveRecord::Migration[5.2]
  def self.up
    rename_column :parks, :state, :states
  end

  def self.down
  end
end
