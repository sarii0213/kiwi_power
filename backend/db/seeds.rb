# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.create!(
  [{
    display_body_fat: true,
    display_period: true,
    email: 'user01@example.com',
    encrypted_password: 'xxx',
    goal_weight: '60.0',
    height: '160',
    username: 'user01',
  }, 
  {
    display_body_fat: false,
    display_period: false,
    email: 'user02@example.com',
    encrypted_password: 'yyy',
    goal_weight: '70.0',
    height: '160',
    username: 'user02',
  }] 
)