# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  acts_as_voter
  has_many :questions, dependent: :destroy
  has_many :answers, dependent: :destroy
  has_many :answers, through: :questions
  has_many :comments, dependent: :destroy
  has_many :comments, through: :answers

  has_many :images
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
end
