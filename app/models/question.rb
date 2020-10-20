class Question < ApplicationRecord
  belongs_to :user
  has_many :answers, dependent: :destroy
  # has_many :answers, :through => :users

end
