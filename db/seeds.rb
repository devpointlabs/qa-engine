require "faker"

puts "Cleaning database"
Question.destroy_all
User.destroy_all


puts "Seeding Users"
5.times do |i|    
  user = User.new
  user.id = i
  user.email = "test#{i}@test.com"
  user.password = '123456'
  user.password_confirmation = '123456'
  user.name = Faker::Name.first_name + " " + Faker::Name.last_name
  user.image = Faker::Avatar.image(slug: "#{user.name}#{i}", size: "300x300", format: "png", set: "set1")
  user.first_name = Faker::Name.first_name
  user.last_name =  Faker::Name.last_name
  user.cohort = i+2020
  user.points = i+1
  user.rank = i+1
  user.is_admin = false

  user.save!
  puts "#{user.email} + #{user.name} created"

  # puts "Seeding Questions"
  # 3.times do |k|
  #   q = Question.new
  #   q.id = k + (i*5)
  #   q.title = Faker::Kpop.i_groups
  #   # q.body = "is #{Faker::Computer.platform} a #{Faker::Food.description}"
  #   # q.is_answered = true ##terinary to make it switch off? 
  #   # q.upvote = k

  #   q.save!
  #   puts "#{q.id}"

  # end
  
 


    

end
