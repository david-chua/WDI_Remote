class PinsController < ApplicationController
  # An optional method for when we wire up Angular
  def get_all
    boards = Board.all
    pins = Pin.all
    all_data = {boards: boards, pins: pins}
    render json: all_data
  end

  # GET
  def index
    pins = Pin.where(board_id: params[:board_id])

    render json: pins
  end

  # GET /pins/1
  def show
    pin = Pin.find(params[:id])
    render json: pin
  end

  # POST /pins
  def create
    puts "****************"
    puts(pin_params)
    puts "****************"

    board = Board.find(params[:board_id])
    puts "********BOARD********"
    puts board
    pin = board.pins.create(pin_params)

    if pin
      render json: pin, status: :created
    else
      render json: pin.errors, status: :unprocessable_entity
    end

  end

  # PATCH/PUT /pins/1
  def update
    pin = Pin.find(params[:id])
    if pin.update(pin_params)
      render json: pin
    else
      render json: pin.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pins/1
  def destroy
    pin = Pin.find(params[:id])
    pin.destroy
    render json: {status: 204}
  end

  private

    # Only allow a trusted parameter "white list" through.
    def pin_params
      params.require(:pin).permit(:title, :image_url, :board_id)
    end
end
