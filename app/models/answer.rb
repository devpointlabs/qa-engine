class Answer < ApplicationRecord
  acts_as_votable
  belongs_to :question
  belongs_to :user
  has_many :comments, dependent: :destroy

# SELECT first_name, last_name, body, upvote, is_correct
# from answers
# ORDER BY upvote desc;

  def self.highest_vote
    select("first_name, last_name, body, upvote, is_correct")
    .order("upvote desc limit 8")
  end
end
