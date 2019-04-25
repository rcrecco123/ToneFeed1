Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  resources :tracks, only: :show

  
  namespace :api, defaults: {format: :json} do
    resources :tracks, only: [:create, :index]
    resources :users, only: [:new, :create, :show, :index]
    resource :session, only: [:new, :create, :destroy]
  end

end
