class AddVehicleToCharacter < ActiveRecord::Migration[5.0]
  def change
    add_column :characters, :vehicle, :string
  end
end
