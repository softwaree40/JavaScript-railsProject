class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :description
      t.references :dog, null: false, foreign_key: true

      t.timestamps
    end
  end
end
