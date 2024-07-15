module Api
  module V1
    class UsersController < Api::V1::ApiController

      def index
        @users = User.page(params[:page])
        @total_count = @users.count
        @current_page = @users.page(params[:page]).current_page
      end
    end
  end
end