class UsersController < ApplicationController
# Show all of the user in Json
  def index
      users = User.all.sample(6)

      render json: users
  end
#Show one user in json
  def show
    user = User.find(params[:id])

    render json: user
  end
#create user and show in json
  def create
    user = User.new(user_params)

    if user.save
      render json: user, status: :created, location: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end
#update user info
  def update
    user = User.find(params[:id])

    if user.update(user_params)
      render json: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end
#destroy user
  def destroy
    user = User.find(params[:id])
    user.destroy
    users = User.all

    render json: users
  end

  private

  def user_params
    params.require(:user).permit(:name, :gender, :age, :img)
  end

end
