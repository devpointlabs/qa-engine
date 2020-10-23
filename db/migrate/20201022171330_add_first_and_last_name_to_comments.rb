class AddFirstAndLastNameToComments < ActiveRecord::Migration[6.0]
  def change
    add_column :comments, :first_name, :string
    add_column :comments, :last_name, :string
  end
end
