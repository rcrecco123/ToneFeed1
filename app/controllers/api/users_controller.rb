class Api::UsersController < ApplicationController

    def new
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render '/api/users/show'
            #THE USERS SHOW PAGE WILL BE MY FEED
        else
            render json: @user.errors, status: 501
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end

end