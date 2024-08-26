# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                     :bigint           unsigned, not null, primary key
#  allow_password_change  :boolean          default(FALSE)
#  confirmation_sent_at   :datetime
#  confirmation_token     :string(255)
#  confirmed_at           :datetime
#  display_body_fat       :boolean          default(FALSE)
#  display_period         :boolean          default(FALSE)
#  email                  :string(255)      not null
#  encrypted_password     :string(255)      default(""), not null
#  goal_weight            :float(24)
#  height                 :float(24)
#  provider               :string(255)      default("email"), not null
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string(255)
#  tokens                 :text(65535)
#  uid                    :string(255)      default(""), not null
#  unconfirmed_email      :string(255)
#  username               :string(255)      not null
#  created_at             :datetime
#  updated_at             :datetime
#
# Indexes
#
#  index_users_on_confirmation_token    (confirmation_token) UNIQUE
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#  index_users_on_uid_and_provider      (uid,provider) UNIQUE
#
FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    encrypted_password { Faker::Internet.password(min_length: 6) }
    goal_weight { rand(40.0..80.0) }
    username { Faker::JapaneseMedia::StudioGhibli.unique.character }
  end
end
