class TagContent < ApplicationRecord
  belongs_to :website, dependent: :destroy
end
