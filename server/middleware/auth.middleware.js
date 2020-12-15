import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/user.model.js';
import colors from 'colors';

const protect = asyncHandler(async (req, res, next) => {
  const auth = req.headers.authorization;
  let token;
  if (auth && auth.startsWith('Bearer ')) {
    try {
      token = auth.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // set req.user to decoded token id user
      req.user = await User.findById(decoded._id).select('-password');
      next();
    } catch (error) {
      console.error(`${error}`.red);
      // Proceed with error
      res.status(401);
      throw new Error('Not authorized, Invalid Token');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Not Authorized');
  }
});

export { protect };
