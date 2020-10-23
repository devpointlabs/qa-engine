class Question < ApplicationRecord
  acts_as_votable
  belongs_to :user
  has_many :answers, dependent: :destroy
  # has_many :answers, :through => :users

end
