# == Route Map
#

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get 'hello', to: 'hello#index'
      resources :user_settings
      mount_devise_token_auth_for 'User', at: 'auth'
    end
  end  
end
