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

@match1 = Match.new({'home_team' => 'Ablania', 'away_team' => 'France'}).save
@match2 = Match.new({'home_team' => 'Ablania', 'away_team' => 'Romania'}).save
@match3 = Match.new({'home_team' => 'Switzerland', 'away_team' => 'Albania'}).save
@match4 = Match.new({'home_team' => 'France', 'away_team' => 'Romania'}).save
@match5 = Match.new({'home_team' => 'Romania', 'away_team' => 'Switzerland'}).save
@match6 = Match.new({'home_team' => 'Switzerland', 'away_team' => 'France'}).save
