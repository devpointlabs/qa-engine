class Api::CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_comment, only: [:show, :edit, :update, :destroy]
  before_action :set_answer
  
  def index
    render json: @answer.comments
  end

  def show
    render json: @comment
  end

  def new
    @comment = Comment.new
  end

  def create
      # binding.pry
      # comment = Comment.new(user_id: current_user.id, answer_id: @answer.id, body: params[:comment][:body])
    comment =  @answer.comments.new(comment_params)
    if comment.save
      render json: comment
    else
      render json: comment.errors, status: 422
    end
  end

  def update
    if comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: 422
    end
  end

  def destroy
    @comment.destroy
  end

  private

  def set_answer
    @answer = current_user.answers.find(params[:answer_id])
  end

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:body, :user_id, :answer_id, :upvote)
  end
end
