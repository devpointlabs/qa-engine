class Api::QuestionsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_question, only: [ :show, :update, :destroy, :vote, :get_vote ]

  def index
    # render json: User.questions.all
    render json: current_user.questions.all
  end

  # !== all the questions that belong to this user
  def all_questions
    render json: Question.all
  end

  def show
    render json: @question
  end

  def new
    @question = Question.new
  end

  def create
    question = current_user.questions.new(question_params)
    if question.save
      render json: question
    else
      render json: question.errors, status: 422
    end
  end

  def update
    if @question.update(question_params)
      # binding.pry
      render json: @question
    else
      render json: @question.errors, status: 422
    end
  end
  
  def destroy
    @question.destroy
  end

  def get_vote
    
    render json: @question.votes_for.size 
  end
  
  def vote
    if current_user.voted_for? @question
      # render json: {message: "already voted on"} 
      render json: @question.votes_for.size
    else
    @question.liked_by current_user
    # if @question.update(question_params)
      # binding.pry
      # render json: @question
      render json: @question.votes_for.size 
    # else
    end
      # render json: @question.errors, status: 422
    # end
    # render json: @question.votes_for.size 
  end

  private

  def set_question
    @question = Question.find(params[:id])
  end

  def question_params
    params.require(:question).permit(:title, :body, :is_answered, :upvote )
  end
end
