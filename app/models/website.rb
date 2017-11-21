class Website < ApplicationRecord
  has_many :tag_contents

  def self.search(params)
    keyword = params['keyword'] || ''
    order = params['order'] || 'id DESC'
    Website.where('url like ?', "%#{keyword}%").order(order)
  end
end
