class CreateTagContents < ActiveRecord::Migration[5.1]
  def change
    create_table :tag_contents do |t|
      t.string :tag_type
      t.text :content
      t.references :website, foreign_key: true

      t.timestamps
    end
  end
end
