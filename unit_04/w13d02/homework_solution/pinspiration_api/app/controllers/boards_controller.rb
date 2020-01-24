class BoardsController < ApplicationController
  # GET /boards
  def index
    boards = Board.all

    render json: boards
  end

  # GET /boards/1
  def show
    board = Board.includes(:pins).find(params[:id])
    render json:{board: board, pins: board.pins}
  end

  # POST /boards
  def create
    board = Board.new(board_params)
    puts "******************"
    puts(board_params)
    puts "******************"

    if board.save
      render json: board, status: :created, location: board
    else
      render json: board.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /boards/1
  def update
    board = Board.find(params[:id])
    if board.update(board_params)
      render json: board
    else
      render json: board.errors, status: :unprocessable_entity
    end
  end

  # DELETE /boards/1
  def destroy
    board = Board.find(params[:id])
    board.destroy

    render json: {status: 204}
  end

  private
    # Only allow a trusted parameter "white list" through.
    def board_params
      params.require(:board).permit(:title)
    end
end
