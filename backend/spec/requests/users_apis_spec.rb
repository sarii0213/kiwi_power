require 'rails_helper'

describe "GET /users/:id", type: :request do
  it "ユーザー設定の取得" do
    user = create(:user)
    get api_v1_user_path(user)
  
    expect(response).to have_http_status(:ok)
    expect(response.body).to include(user.username)
  end
end
