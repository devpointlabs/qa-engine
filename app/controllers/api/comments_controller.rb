class Api::CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_comment, only: [:show, :edit, :update, :destroy]
  
  def index
    render json: current_user.comments.all
  end

  def show
    render json: @comment
  end

  def new
    @comment = Comment.new
  end

  def create
    comment = current_user.comments.new(comment_params)
  
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

  def destroy
    @comment.destroy
  end

  private

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:body, :upvote)
  end
end
