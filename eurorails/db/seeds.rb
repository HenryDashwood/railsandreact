# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Team.delete_all
Match.delete_all

# @team1 = Team.new({'name' => 'Albania', 'points' => 3}).save
# @team2 = Team.new({'name' => 'France'}).save
# @team3 = Team.new({'name' => 'Romania'}).save
# @team4 = Team.new({'name' => 'Switzerland'}).save
#
# @match1 = Match.new({'home_team' => 'Ablania', 'away_team' => 'France', 'home_score' => 0, 'away_score' => 2}).save
# @match2 = Match.new({'home_team' => 'Ablania', 'away_team' => 'Romania', 'home_score' => 1, 'away_score' => 1}).save
# @match3 = Match.new({'home_team' => 'Switzerland', 'away_team' => 'Albania', 'home_score' => 1, 'away_score' => 0}).save
# @match4 = Match.new({'home_team' => 'France', 'away_team' => 'Romania', 'home_score' => 3, 'away_score' => 1}).save
# @match5 = Match.new({'home_team' => 'Romania', 'away_team' => 'Switzerland', 'home_score' => 1, 'away_score' => 2}).save
# @match6 = Match.new({'home_team' => 'Switzerland', 'away_team' => 'France', 'home_score' => 0, 'away_score' => 2}).save
