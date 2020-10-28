class Answer < ApplicationRecord
  acts_as_votable
  belongs_to :question
  belongs_to :user
  has_many :comments, dependent: :destroy

# SELECT * FROM answers
# WHERE upvote > 0 AND created_at > current_date - interval '7 days'
# ORDER BY upvote desc

  def self.highest_vote
    select("first_name, last_name, body, upvote, is_correct")
    .where("upvote > 0 AND created_at > current_date - interval '7 days'")
    .order("upvote desc limit 8")
  end

# SELECT user_id, MAX(u.first_name) AS fn, MAX(u.last_name) AS ln, SUM(upvote) AS Total_upvotes 
# from answers AS a
# INNER JOIN users AS u on u.id = user_id
# GROUP BY user_id
# ORDER BY Total_upvotes desc limit 5

  def self.top_gun
    select("user_id, MAX(u.first_name) AS first_name, MAX(u.last_name) AS last_name, SUM(upvote) AS Total_upvotes")
    .joins("INNER JOIN users AS u on u.id = user_id")
    .group("user_id")
    .order("Total_upvotes desc limit 5")
  end
end
