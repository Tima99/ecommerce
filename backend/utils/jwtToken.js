// Create Token and saving in cookie

const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();
  const cookieExpire = process.env.COOKIE_EXPIRE || 5

  // options for cookie
  const options = {
    expires: new Date(
      Date.now() +  cookieExpire * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    sameSite: "none",
    secure: process.env.NODE_ENV === "PRODUCTION" ? true : false
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
