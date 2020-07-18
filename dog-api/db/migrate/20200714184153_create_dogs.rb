class CreateDogs < ActiveRecord::Migration[6.0]
  def change
    create_table :dogs do |t|
      t.string :name
      t.integer :age
      t.string :sex
      t.string :description
      t.string :status

      t.timestamps
    end
  end
end
