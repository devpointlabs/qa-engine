class Api::AnswersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_question, only: [ :show, :update, :destroy ]

  def index
    render json: Answer.all
  end

  def show
    render json: @answer
  end

  def new
    @answer = Answer.new
  end

  def create
    # answer = current_user.answers.new(answer_params)
    answer = Answer.new(answer_params)

    if answer.save
      render json: answer
    else
      render json: answer.errors, status: 422
    end
  end

  def update

    # A user should not be able to edit their answer once it has been selected as the correct answer for a question
    
    if @answer.update(answer_params)
      render json: @answer
    else
      render json: @answer.errors, status: 422
    end
  end

  def destroy
    @answer.destroy
  end

  private

  def set_answer
    @answer = Answer.find(params[:id])
  end

  def answer_params
    params.require(:answer).permit(:body, :is_correct, :upvote)
  end

end
