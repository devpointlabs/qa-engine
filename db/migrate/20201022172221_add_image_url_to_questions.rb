class AddImageUrlToQuestions < ActiveRecord::Migration[6.0]
  def change
    add_column :questions, :image_url, :string
  end
end
