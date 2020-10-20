Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # namespace :api do
  #   resources :things
  
  namespace :api do
    # resources :questions 
    resources :questions do
      resources :answers
    # resources :answers do
    #     resources :comments
    
    end
  
    resources :answers do
      resources :comments
    end
    get 'all_questions', to: 'questions#all_questions'
  end
end

