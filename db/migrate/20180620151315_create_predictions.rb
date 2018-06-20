class CreatePredictions < ActiveRecord::Migration[5.2]
  def change
    create_table :predictions do |t|
      t.string :content
      t.string :sport
      t.string :status

      t.timestamps
    end
  end
end
