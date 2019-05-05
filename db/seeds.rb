# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Park.destroy_all
FavoritePark.destroy_all

user1 = User.create(username: "user1", firstname: "Mark", lastname: "Zuckerberg")
user2 = User.create(username: "user2", firstname: "Dan", lastname: "Abramov")
user3 = User.create(username: "user3", firstname: "Brittany", lastname: "Grebnova")

john_muir = Park.create(name: "John Muir", state: "CA", park_code: "jomu", description: "John Muir played many roles in his life, all of which helped him succeed in his role as an advocate for Nature. As America’s most famous naturalist and conservationist, Muir fought to protect the wild places he loved, places we can still visit today. Muir’s writings convinced the U.S. government to protect Yosemite, Sequoia, Grand Canyon and Mt. Rainier as national parks.", directions_url: "http://www.nps.gov/jomu/planyourvisit/directions.htm", url: "https://www.nps.gov/jomu/index.htm")
joshua_tree = Park.create(name: "Joshua Tree National Park", state: "CA", park_code: "jotr", description: "Two distinct desert ecosystems, the Mojave and the Colorado, come together in Joshua Tree National Park. A fascinating variety of plants and animals make their homes in a land sculpted by strong winds and occasional torrents of rain. Dark night skies, a rich cultural history, and surreal geologic features add to the wonder of this vast wilderness in southern California. Come explore for yourself.", directions_url: "http://www.nps.gov/jotr/planyourvisit/directions.htm", url: "https://www.nps.gov/jotr/index.htm")
lassen_volcanic = Park.create(name: "Lassen Volcanic", state: "CA", park_code: "lavo", description: "Lassen Volcanic National Park is home to steaming fumaroles, meadows freckled with wildflowers, clear mountain lakes, and numerous volcanoes. Jagged peaks tell the story of its eruptive past while hot water continues to shape the land. Lassen Volcanic offers opportunities to discover the wonder and mysteries of volcanoes and hot water for visitors willing to explore the undiscovered.", directions_url: "http://www.nps.gov/lavo/planyourvisit/directions.htm", url: "https://www.nps.gov/lavo/index.htm")

favorited_john_muir = FavoritePark.create(user_id: user1.id, park_id: john_muir.id)
favorited_joshua_tree = FavoritePark.create(user_id: user2.id, park_id: joshua_tree.id)
favorited_lassen_volcanic = FavoritePark.create(user_id: user3.id, park_id: lassen_volcanic.id)
