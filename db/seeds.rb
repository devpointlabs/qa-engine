require "faker"

puts "Cleaning database"
Comment.destroy_all
Answer.destroy_all
Question.destroy_all
User.destroy_all



puts "Seeding Users"
5.times do |i|    
  user = User.new
  user.id = i
  puts " User ID assigned #{user.id}"
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
  if user.save
  puts "#{user.email} + #{user.name} created"
  end

  puts "Seeding Questions"
  3.times do |k|
    # puts "starting question seed #{k}"
    q = Question.new
    # puts "new question made"
    q.id = k + (i*3)
    puts "Question id assigned #{q.id}"
    q.title = Faker::Kpop.i_groups
    # puts "title assigned"
    # puts "#{q.title}"
    q.body = "is #{Faker::Computer.platform} a #{Faker::Food.description}?"
    q.is_answered = true ##terinary to make it switch off? 
    q.upvote = k
    # puts "#{q.body}"
    q.user_id = i
    q.save!

  

  puts "Seeding Answers"
  2.times do |m|
    a = Answer.new
    random = rand(1.0..10000.0)
    a.id = random
    a.is_correct = false
    a.upvote = rand(1..3)
    a.body = Faker::Movies::HitchhikersGuideToTheGalaxy.marvin_quote
    # puts a.body
    a.question_id = k
    puts "question id: #{a.question_id}"
    a.user_id = rand(User.count)
    puts "user id: #{a.user_id}"

    a.save!
    if a.save
      puts "answer id:#{a.id} created"
      end


      puts "Seeding Comments"
      2.times do |o|
        c = Comment.new
        c.id = rand(1..100000000)
        c.body = Faker::Movies::PrincessBride.quote
        c.upvote = rand(1..3)
        c.user_id = rand(User.count)
        c.answer_id = random

        c.save!
        if c.save
          puts "comment id:#{c.id} created"
          puts "#{c.answer_id}"
          end
        end

puts "***********************"

    end
  
  end

  puts "***********************"
  puts "***********************"
    

end
