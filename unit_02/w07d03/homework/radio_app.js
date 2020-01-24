// Part 1:
// Radio has a name and station number
// Show has a name, a host, time slot, rating, and what kind of music they play.
// DJ has a real name and stage name and age and social media info
// Team: has a co-host, producer, intern, sound producer, etc.

Part 2:
var RadioStation = {
  Name: String,
  Station: String,
}

var Show = {
  DJ: String,
  DaysofWeek: [],
  TimeSlot: Number,
  Genre: String,
  Rating: Number,
  Rank: Number,
}

DJ = {
  Name: String,
  Alias: String,
  Age: Number,
  SocialMediaInfo: []
}

Team ={
  Member {
      Name: String,
      Role: String,
      SocialMediaInfo: Array
  },
  SocialMediaInfo: Array
}

Songs: {
  Title: String,
  Artist: String,
  Album: String,
  Rating: Number,
  TimeInRating: String,
  Rating Change: String
}

Part 3:

var MikeyMike = Radio Station: {
  Name: Top 10 with MikeyMike,
  Station: 93.3
  Show: [{
      DJ: [{
        Name: Mike Sanchez,
        Alias: MikeyMike,
        Age: 28,
        Social_Media: [{
            Instagram: MikeyMike,
            Facebook: MikeyMikeTalks,
            Tweeter: MikeTalks
        }],
        Genre: Mix,
        Rating: 21%,
        Rank: #2
      }],
    DaysofWeek: [{
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday
      }],
    Time Slot: 7:00 AM,
    Team: [{}
      Name: Minnie Nguyen,
      Role: Co-Host,
      SocialMediaInfo: [{
        Instagram: MinnnieSlays,
        Facebook: MinnieMadness,
        Tweeter: MinnieMinieMo
      }]
    }],
    Songs: [{
      Title: Closer,
      Artist: Chainsmokers ft. Halsey,
      Album: Collage,
      Rating: #2,
      Genre: EDM,
      TimeInRating: 10 weeks,
      RatingChange: -2
    }]
    }]
}
