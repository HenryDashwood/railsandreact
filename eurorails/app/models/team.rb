class Team < ActiveRecord::Base
  belongs_to :league
  has_many :fixtures
  has_many :matches, through: :fixtures

end
