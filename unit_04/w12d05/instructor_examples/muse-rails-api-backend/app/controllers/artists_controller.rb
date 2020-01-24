class ArtistsController < ApplicationController

  def index
    artists = Artist.all

    render json: artists
  end

  def show
    artist = Artist.find(params[:id])

    songs = artist.songs
    render json: {artist: artist, songs: songs}
  end

  def create
    artist = Artist.new(artist_params)

    if artist.save
      render json: artist, status: :created, location: artist
    else
      render json: artist.errors, status: :unprocessable_entity
    end
  end

  def update
    artist = Artist.find(params[:id])

    if artist.update(artist_params)
      render json: artist
    else
      render json: artist.errors, status: :unprocessable_entity
    end
  end

  def destroy
    artist = Artist.find(params[:id])
    artist.destroy
    artists = Artist.all

    render json: artists
  end

  def new_song
    artist = Artist.find(params[:id])
    new_song = artist.songs.create({title: params[:title]})

    songs = artist.songs

    render json: {artist: artist, songs: songs}
  end



  private

    def artist_params
      params.require(:artist).permit(:name, :hometown, :img, :albums)
    end

end
