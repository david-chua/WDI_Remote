Artist.destroy_all

rihanna = Artist.new(name: "Rihanna", albums: 6, hometown: "Barbados", img: "http://mccarthyamp.com/wp-content/uploads/2016/02/23445669273_bfc7c4062b_b.jpg")
taylor = Artist.new(name: "Taylor Swift", albums: 8, hometown: "Nashville", img: "https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png")
billy = Artist.new(name: "Billy Joel", albums: 14, hometown: "Long Island", img: "https://images-na.ssl-images-amazon.com/images/I/81RgoBLQOKL._SY355_.jpg")
drake = Artist.new(name: "Drake", albums: 4, hometown: "Toronto", img: "http://images.complex.com/complex/image/upload/t_in_content_image/drake-thank-me-later-album-cover_o6ek33.jpg")
beyonce = Artist.new(name: "Beyonce", albums: 6, hometown: "Houston", img: "http://www.fuse.tv/image/571c26a6017704456e00001b/816/545/beyonce-lemonade-album-cover-full.jpg")

[rihanna, taylor, billy, drake, beyonce].each { |artist| artist.save }

Song.create(artist_id: rihanna.id, title: "Umbrella", genre: "Pop")
Song.create(artist_id: taylor.id, title: "Shake It Off", genre: "Pop")
Song.create(artist_id: billy.id, title: "Pressure", genre: "Rock")
Song.create(artist_id: drake.id, title: "Hotline Bling", genre: "Rap")
Song.create(artist_id: beyonce.id, title: "Lemonade", genre: "R&B")
