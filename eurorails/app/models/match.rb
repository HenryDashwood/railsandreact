class Match < ActiveRecord::Base
  has_many :fixtures
  has_many :teams, through: :fixtures
end
