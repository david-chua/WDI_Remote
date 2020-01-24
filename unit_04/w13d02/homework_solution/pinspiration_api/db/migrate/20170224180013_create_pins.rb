
class CreatePins < ActiveRecord::Migration[5.0]
  def change
    create_table :pins do |t|
      t.references :board, foreign_key: true
      t.string :title
      t.string :image_url

      t.timestamps
    end
  end
end
