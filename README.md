# README

* Ruby version : 2.4.0

* Rails Version : 5.1.4

# Commands to setup API project :

* bundle install
* rake db:setup
* rails s

# Commands to setup client project (built with ReactJs) : 

* cd path_to_project/client
* npm install
* npm start

The client is configured to request api on "http://localhost:3001" host and port.

# APIs

1. Content extractor API
	* URL : GET http://localhost:3001/api/v1/websites/extract_content.json
	* PARAMS: {website: {url: 'http://url string for website whose header tags are to be extracted' } }
	* Sample Response: {
						    "id": 26,
						    "url": "https://github.com/ravi-ture/content-extractor",
						    "created_at": "2017-11-21T05:05:58.647Z",
						    "updated_at": "2017-11-21T05:05:58.647Z",
						    "tag_contents": [
						        {
						            "id": 345,
						            "tag_type": "h1",
						            "content": "\n  \n  ravi-ture/content-extractor\n\n",
						            "website_id": 26,
						            "created_at": "2017-11-21T05:05:58.653Z",
						            "updated_at": "2017-11-21T05:05:58.653Z"
						        },
						        {
						            "id": 346,
						            "tag_type": "h3",
						            "content": "This repository is empty.",
						            "website_id": 26,
						            "created_at": "2017-11-21T05:05:58.655Z",
						            "updated_at": "2017-11-21T05:05:58.655Z"
						        }
						    ]
						}

2. Url Listing API
	* URL: GET http://localhost:3001/api/v1/websites.json
	* PARAMS: 
		page: page number for pagination purpose
		per: number of records per page
		keyword: keyword to search in website url
		order: order by attribute(it can be 'id ASC', 'id DESC', 'url ASC', 'url DESC', 'updated_at ASC', 'updated_at DESC')
	* Sample Response: {
						    "websites": [
						        {
						            "id": 26,
						            "url": "https://github.com/ravi-ture/content-extractor",
						            "created_at": "2017-11-21T05:05:58.647Z",
						            "updated_at": "2017-11-21T05:05:58.647Z"
						        },
						        {
						            "id": 25,
						            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals",
						            "created_at": "2017-11-21T04:48:50.656Z",
						            "updated_at": "2017-11-21T04:48:50.656Z"
						        },
						        {
						            "id": 24,
						            "url": "https://sourcey.com/building-the-prefect-rails-5-api-only-app/",
						            "created_at": "2017-11-18T05:22:18.557Z",
						            "updated_at": "2017-11-18T05:22:18.557Z"
						        }
						    ],
						    "current_page": 1,
						    "total_pages": 9,
						    "total_count": 3
						}
3. Single Website's Content API : It will get you the content in header tags of websites
	* URL: GET http://localhost:3001/api/v1/websites/{:ID}.json
	* PARAMS: No Params
	* Sample Response: {
						    "id": 1,
						    "url": "http://ruby.bastardsbook.com/chapters/html-parsing/",
						    "created_at": "2017-11-17T04:28:19.916Z",
						    "updated_at": "2017-11-17T04:28:19.916Z",
						    "tag_contents": [
						        {
						            "id": 1,
						            "tag_type": "h1",
						            "content": "Parsing HTML with Nokogiri",
						            "website_id": 1,
						            "created_at": "2017-11-17T04:28:19.919Z",
						            "updated_at": "2017-11-17T04:28:19.919Z"
						        },
						        {
						            "id": 2,
						            "tag_type": "h2",
						            "content": "Nokogiri\n",
						            "website_id": 1,
						            "created_at": "2017-11-17T04:28:19.920Z",
						            "updated_at": "2017-11-17T04:28:19.920Z"
						        },
						        {
						            "id": 3,
						            "tag_type": "h3",
						            "content": "Installing Nokogiri\n",
						            "website_id": 1,
						            "created_at": "2017-11-17T04:28:19.921Z",
						            "updated_at": "2017-11-17T04:28:19.921Z"
						        },
						        {
						            "id": 4,
						            "tag_type": "h3",
						            "content": "Opening a page with Nokogiri and open-uri\n",
						            "website_id": 1,
						            "created_at": "2017-11-17T04:28:19.922Z",
						            "updated_at": "2017-11-17T04:28:19.922Z"
						        },
						        {
						            "id": 5,
						            "tag_type": "h2",
						            "content": "Nokogiri and CSS selectors\n",
						            "website_id": 1,
						            "created_at": "2017-11-17T04:28:19.922Z",
						            "updated_at": "2017-11-17T04:28:19.922Z"
						        },
						        {
						            "id": 6,
						            "tag_type": "h3",
						            "content": "A table of syntax\n",
						            "website_id": 1,
						            "created_at": "2017-11-17T04:28:19.923Z",
						            "updated_at": "2017-11-17T04:28:19.923Z"
						        },
						        {
						            "id": 7,
						            "tag_type": "h3",
						            "content": "Xpath selectors\n",
						            "website_id": 1,
						            "created_at": "2017-11-17T04:28:19.924Z",
						            "updated_at": "2017-11-17T04:28:19.924Z"
						        },
						        {
						            "id": 8,
						            "tag_type": "h2",
						            "content": "Nokogiri and your web inspector\n",
						            "website_id": 1,
						            "created_at": "2017-11-17T04:28:19.925Z",
						            "updated_at": "2017-11-17T04:28:19.925Z"
						        }
						    ]
						}