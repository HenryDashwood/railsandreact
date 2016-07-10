# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

@team1 = Team.new({'name' => 'Albania'}).save
@team2 = Team.new({'name' => 'France'}).save
@team3 = Team.new({'name' => 'Romania'}).save
@team4 = Team.new({'name' => 'Switzerland'}).save
