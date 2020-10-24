class Question < ApplicationRecord
  acts_as_votable
  belongs_to :user
  has_many :answers, dependent: :destroy
  # has_many :answers, :through => :users

    def self.search_questions(title, body, first_name, last_name)
    find_by_sql(["
    SELECT *
    FROM questions
    WHERE LOWER(title) LIKE LOWER(?) OR LOWER(body) LIKE LOWER(?) OR LOWER(first_name) LIKE LOWER(?) OR LOWER(last_name) LIKE LOWER(?)
    ORDER BY updated_at DESC
    ", "%#{title}%", "%#{body}%", "%#{first_name}%", "%#{last_name}%"])
  end

end
