class AddSlugToUrls < ActiveRecord::Migration[6.0]
  def change
    add_column :urls, :slug, :string
    add_index :urls, :slug, unique: true
  end
end
