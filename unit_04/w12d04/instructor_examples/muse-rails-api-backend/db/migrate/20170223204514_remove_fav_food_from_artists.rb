class RemoveFavFoodFromArtists < ActiveRecord::Migration[5.0]
  def change
    remove_column :artists, :fav_food, :boolean
  end
end
