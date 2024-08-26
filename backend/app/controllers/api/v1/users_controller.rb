# frozen_string_literal: true
# TODO: 不要なので削除？

module Api
  module V1
    class UsersController < Api::V1::ApiController
      before_action :authenticate_user!

      def index
        @users = User.page(params[:page])
        @total_count = @users.count
        @current_page = @users.page(params[:page]).current_page
      end

      def show
        @user = User.find(params[:id])
      end
    end
  end
end
