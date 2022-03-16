# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Song.destroy_all

Song.create(songname:'Come As You Are', artist:'Nirvana')
Song.create(songname:'Jammin', artist:'Bob Marley')
Song.create(songname:'KOD', artist: 'JCole')
Song.create(songname:'Its Never Enough', artist:'Audiodub')
Song.create(songname:'Pretty Little Fears', artist: 'Jcole and 6lack')
Song.create(songname:'Youre Somebody else', artist:'Flora Cash')
Song.create(songname:'Somebody Else', artist:'The 1975')

puts "SONGS: #{Song.all.count}"