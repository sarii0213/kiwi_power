# frozen_string_literal: true

module Api
  module V1
    class UsersController < Api::V1::ApiController
      def index
        @users = User.page(params[:page])
        @total_count = @users.count
        @current_page = @users.page(params[:page]).current_page
      end

      def show
        # TODO: ログイン機能実装後, ユーザー特定方法をparamsではなくcurrent_user取得に修正
        @user = User.find(params[:id])
      end
    end
  end
end
