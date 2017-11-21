require 'open-uri'
class WebsitesController < ApplicationController

  def index
    @websites = Website.search(params).page(params['page']).per(params['per'] || 10)
  end

  def extract_content
    if((url  = open(params[:website][:url])).status.first == '200')
      page = Nokogiri::HTML(url)
      website = Website.find_or_initialize_by(website_params)
      TagContent.where(website: website).delete_all unless website.new_record?
      tag_contents = page.css('h1, h2, h3').collect do |el|
        website.tag_contents.build(tag_type: el.name, content: el.text)
      end
      website.save
      render json: website.to_json(include: :tag_contents)
    else 
      render json: {error: 'Invalid URL submitted.'}
    end
  end

  def show
    website = Website.find(params[:id])
    render json: website.to_json(include: :tag_contents)
  end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def website_params
      params.require(:website).permit(:url)
    end
end
