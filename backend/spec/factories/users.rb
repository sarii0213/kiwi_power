# == Schema Information
#
# Table name: users
#
#  id                 :bigint           unsigned, not null, primary key
#  display_body_fat   :boolean          default(FALSE)
#  display_period     :boolean          default(FALSE)
#  email              :string(255)      not null
#  encrypted_password :string(255)      not null
#  goal_weight        :float(24)
#  height             :float(24)
#  username           :string(255)      not null
#  created_at         :datetime
#  updated_at         :datetime
#
FactoryBot.define do
  factory :user do
    email {Faker::Internet.email}
    encrypted_password {Faker::Internet.password(min_length: 6)}
    goal_weight {rand(40.0..80.0)}
    username {Faker::JapaneseMedia::StudioGhibli.unique.character}
  end
end
