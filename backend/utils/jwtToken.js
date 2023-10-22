// Create Token and saving in cookie

const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();
  const cookieExpire = process.env.COOKIE_EXPIRE || 5
  console.log(token)

  // options for cookie
  const options = {
    maxAge: (new Date(
      Date.now() +  cookieExpire * 24 * 60 * 60 * 1000
    )).getTime(),
    httpOnly: true,
    sameSite: "none",
    secure: process.env.NODE_ENV === "PRODUCTION" ? true : false
  };
  console.log(options)

  res.cookie("token", token, options)

  res.status(statusCode).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
