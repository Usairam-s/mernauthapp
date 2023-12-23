import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";
export const verifyToken = (req, res, next) => {
  //versify token comming with request cookie named access_token
  const token = req.cookies.access_token;
  if (!token) return next(errorHandler(401, "Access Denied"));

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) return next(errorHandler(401, "Failed to authenticate user"));
    //if everything is good this will execute
    req.user = user;
    next();
  });
};
