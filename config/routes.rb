Rails.application.routes.draw do
  
  scope :api do
    scope :v1 do 
      resources :websites, only: [:index, :show], format: :json do
        get :extract_content, on: :collection
      end
    end
  end
end
