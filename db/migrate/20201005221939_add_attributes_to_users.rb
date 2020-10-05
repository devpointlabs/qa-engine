class AddAttributesToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :cohort, :string
    add_column :users, :points, :integer
    add_column :users, :rank, :string
    add_column :users, :is_admin, :boolean
  end
end
