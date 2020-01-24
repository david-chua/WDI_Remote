class RenameDescription < ActiveRecord::Migration[5.0]
  def change
    rename_column :characters, :desciption, :description 
  end
end
