class AddImageUrlToAnswers < ActiveRecord::Migration[6.0]
  def change
    add_column :answers, :image_url, :string
  end
end
