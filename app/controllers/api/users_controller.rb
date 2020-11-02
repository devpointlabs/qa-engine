class Api::UsersController < ApplicationController
before_action :authenticate_user!

def update
  user = User.find(params[:id])
  user.first_name = params[:first_name] ? params[:first_name] : user.first_name
  user.last_name = params[:last_name] ? params[:last_name] : user.last_name
  user.email = params[:email] ? params[:email] : user.email
  user.cohort = params[:cohort] ? params[:cohort] : user.cohort
  file = params[:file]

  if file
    
    begin
     
      cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
      user.image = cloud_image['secure_url']
    rescue => e
      
      render json: { errors: e }, status: 422
      return # need to return here so we don't try to save user
    end
  end
  if user.save
    render json: user
  else
    
    render json: { errors: user.errors.full_messages }, status: 422
  end
end

end
