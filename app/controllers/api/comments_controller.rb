class Api::CommentsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :destroy, :vote ]
  before_action :set_comment, only: [:show, :edit, :update, :destroy, :vote, :get_vote ]
  before_action :set_answer, only: [ :index, :show, :new, :create, :destroy ]
  
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

  def get_vote
    render json: @comment.upvote
  end

  def vote
    if current_user.voted_for? @comment
      # render json: {message: "already voted on"} 
      render json: @comment.votes_for.size
      @comment.update(upvote: @comment.votes_for.size)
    else
    @comment.liked_by current_user
    # if @question.update(question_params)
      # binding.pry
      # render json: @question
      render json: @comment.votes_for.size 
    # else
    end
      # render json: @question.errors, status: 422
    # end
    # render json: @question.votes_for.size 
  end

  private

  def set_answer
    @answer = Answer.find(params[:answer_id])
  end

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:body, :user_id, :answer_id, :upvote, :first_name, :last_name, :image_url)
  end
end
