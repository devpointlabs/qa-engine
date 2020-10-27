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
    resources :users, only: :update
    
    resources :answers do
      resources :comments
    end
    

    get "all_questions", to: "questions#all_questions"
    #Search question keywords
    get "search_questions", to: "questions#search_questions"
    get "most_votes", to: "answers#most_votes"
    get "top_votes", to: "answers#top_votes"
    # post "/images/create/", to: "images#create"
    # get "/images", to: "images#index"

    # VOTES
    put '/question/:id/vote', to: 'questions#vote'
    get '/question/:id/get_vote', to: 'questions#get_vote'
    
    #ANSWER VOTES
    put '/answer/:id/vote', to: 'answers#vote'
    get '/answer/:id/get_vote', to: 'answers#get_vote'

    #Search question keywords
    get "search_questions", to: "questions#search_questions"

    
    put '/answer/:id/vote', to: 'answers#vote'
    get '/answer/:id/get_vote', to: 'answers#get_vote'

    put '/comment/:id/vote', to: 'comments#vote'
    get '/comment/:id/get_vote', to: 'comments#get_vote'


    get '*other', to: 'static#index'
  end
end

