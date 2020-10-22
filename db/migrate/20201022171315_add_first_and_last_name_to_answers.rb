class AddFirstAndLastNameToAnswers < ActiveRecord::Migration[6.0]
  def change
    add_column :answers, :first_name, :string
    add_column :answers, :last_name, :string
  end
end
