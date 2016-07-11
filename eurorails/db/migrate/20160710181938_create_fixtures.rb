class CreateFixtures < ActiveRecord::Migration
  def change
    create_table :fixtures do |t|
      t.belongs_to :match, index:true
      t.belongs_to :team, index:true
      t.timestamps null: false
    end
  end
end
