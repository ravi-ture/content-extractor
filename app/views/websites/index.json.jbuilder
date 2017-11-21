json.websites @websites.each do |website|
	json.extract! website, :id, :url, :created_at, :updated_at
end
json.extract! @websites, :current_page, :total_pages
json.total_count @websites.count
