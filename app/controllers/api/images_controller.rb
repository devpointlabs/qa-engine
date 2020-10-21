class Api::ImagesController < ApplicationController
  # before_action :authenticate_user!

  # def index
  #   render json: current_user.images
  # end




  def create
    file = params[:file]

    if file
      begin
        # ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
        # user.image = cloud_image['secure_url']
        Image.create(description: "", image_url: cloud_image["secure_url"], user_id: current_user.id )

        render json: { yo: "worked", file: file, cloud_image: cloud_image }
      rescue => e
        render json: { errors: e }, status: 422
        return
      end
    end
  end
end
