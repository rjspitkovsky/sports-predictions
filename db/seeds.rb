# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Prediction.create(content: "The Brooklyn Nets will make the playoffs in 2019.", sport: "NBA")
Prediction.create(content: "Alex Ovechkin will win a Stanley Cup in his career.", sport: "NHL", status: "correct")
Prediction.create(content: "The Cleveland Browns will make the playoffs in 2018.", sport: "NFL")
Prediction.create(content: "Barry Bonds is a first-ballot Hall of Famer.", sport: "MLB", status: "wrong")
