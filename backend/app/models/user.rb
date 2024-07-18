# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                 :bigint           unsigned, not null, primary key
#  email              :string(255)      not null
#  encrypted_password :string(255)      not null
#  goal_weight        :float(24)
#  username           :string(255)      not null
#  created_at         :datetime
#  updated_at         :datetime
#
class User < ApplicationRecord
end
