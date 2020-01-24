class RenameFevFoodToFavFood < ActiveRecord::Migration[5.0]
  def change
    rename_column :artists, :fev_food, :fav_food
  end
end
