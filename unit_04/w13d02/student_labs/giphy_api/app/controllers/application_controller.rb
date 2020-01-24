class ApplicationController < ActionController::API

  # send json status 401 if unauthorized unless the decoded token = the bearer. Token is obtained using password
  def authenticate
    render json: {status: 401, message: "unauthorized"} unless decode_token(bearer_token)
  end

# send json status unless the current user = the user.id of the user in hand. Parms id has to be an integer.
  def authorize
    render json: {status: 401, message: "unauthorized"} unless current_user.id == params[:id].to_i
  end

  #matches the token with the rquired token
  # gives access to bearer of token
  # saves token locally, gives user authentication when they go on that sght.

  def bearer_token
    pattern = /^Bearer /
    header  = request.env["HTTP_AUTHORIZATION"] # <= env
    header.gsub(pattern, '') if header && header.match(pattern)
  end



  def current_user
    return if !bearer_token

    decoded_jwt = decode_token(bearer_token)

    @current_user ||= User.find(decoded_jwt["user"]["id"])
  end # rejects user if not the correct token.

  def decode_token(token)
    @token ||= JWT.decode(token, nil, false)[0] # this will error if the token is invalid or expired
  rescue #uses application's secret key to decode it. [0] is grabbing the payload
    render json: {status: 401, message: 'invalid or expired token'} #will not let you get in (401)
  end
end
