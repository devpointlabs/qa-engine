class Api::QuestionsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_question, only: [ :show, :update, :destroy ]

  def index
    # render json: User.questions.all
    render json: current_user.questions.all
  end

  def show
    render json: @question
  end

  def new
    @question = Question.new
  end

  def create
    question = Question.new(question_params)
    question1 = current_user.questions.new(question_params)

    if question.save
      render json: question
    else
      render json: question.errors, status: 422
    end
  end

  def update
    if @question.update(question_params)
      render json: @question
    else
      render json: @question.errors, status: 422
    end
  end

  def destroy
    @question.destroy
  end

  private

  def set_question
    @question = Question.find(params[:id])
  end

  def question_params
    params.require(:question).permit(:title, :body, :is_answered, :upvote )
  end
end
