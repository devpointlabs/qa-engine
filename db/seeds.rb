require "faker"

Thing.destroy_all
5.times do |i|
  Thing.create(name: Faker::Name.name)
end


# Question.destroy_all
# 5.times do 
#   title = Faker::Educator.subject
#   body = Faker::TvShows::AquaTeenHungerForce.quote

#   Question.create(title: title, body: body )
# end
