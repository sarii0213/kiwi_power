module Api
  module V1
    class UserSettingsController < Api::V1::ApiController
      before_action :authenticate_user!

      def index
        if current_user
          Rails.logger.info "Current User: #{current_user.email}"
          @user = current_user
        else
          Rails.logger.info "No user found."
        end
        @user = current_user
      end
    end
  end
end
