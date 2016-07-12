class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :name
      t.integer :played
      t.integer :wins
      t.integer :draws
      t.integer :losses
      t.integer :goals_for
      t.integer :goals_against
      t.integer :goal_difference
      t.integer :points

      t.references :league, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
