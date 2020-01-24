class AddFavFoodToArtists < ActiveRecord::Migration[5.0]
  def change
    add_column :artists, :fev_food, :boolean
  end
end
