class AddFirstAndLastNameToQuestion < ActiveRecord::Migration[6.0]
  def change
    add_column :questions, :first_name, :string
    add_column :questions, :last_name, :string
  end
end
