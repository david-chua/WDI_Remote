class AddDescriptionToCharacters < ActiveRecord::Migration[5.0]
  def change
    add_column :characters, :desciption, :string
    add_column :characters, :image_url, :string
  end
end
