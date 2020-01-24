class GifController < ApplicationController

def index
  @gifs = Gif.all

  render json: @gifs
end


def show
  render json: @gif
end


def create
  @gif = Gif.new(gif_params)

  if @gif.save
    render.json: @gif, status: :created, location: @gif
  else
    render json: @gif.errors, status: :unprocessable_entity
  end
end

def update
  if @gif.update(gif.params)
    render json: @gif
  else
    render json: @gif.errors, status: :unprocessable_entity
  end
end

def destroy
  @gif.destroy
end

private

def set_gif
  @gif = Gif.find(params[:id])
end

def gif_params
  params.require(:gif).permite(:name, :url)
end


end
