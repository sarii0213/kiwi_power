# frozen_string_literal: true

class ApplicationController < ActionController::API
    include DeviseTokenAuth::Concerns::SetUserByToken
    include DeviseHackFakeSession # DisabledSessionErrorへの対応
    
    before_action :configure_permitted_parameters, if: :devise_controller?

    protected
  
    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
      devise_parameter_sanitizer.permit(:account_update, keys: [:username])
    end
end
