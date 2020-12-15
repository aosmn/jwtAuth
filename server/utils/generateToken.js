import jwt from 'jsonwebtoken';

const generateToken = (_id, expiresIn = '30d') =>
  jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn });

export default generateToken;
