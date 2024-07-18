# frozen_string_literal: true

module Api
  module V1
    class HelloController < Api::V1::ApiController
      def index
        render json: { message: 'Hello, world!' }
      end
    end
  end
end
