const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const { signInErrors, signUpErrors } = require('../utils/errors.utils');

const maxAge = 3 * 24 * 60 * 60 * 1000;

module.exports.createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge + 'ms',
  });
};

module.exports.signUp = async (req, res) => {
  const { username, name, surname, email, password, birthDate } = req.body;

  try {
    const user = await UserModel.create({
      username,
      name,
      surname,
      email,
      password,
      birthDate,
    });

    const token = createToken(user._id);
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: maxAge,
      sameSite: 'Lax',
    });
    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: maxAge,
      sameSite: 'Lax',
    });
    res.status(200).send({ user: user._id });
  } catch (err) {
    // Status 200 car on cherche à retourner des erreurs
    const errors = signInErrors(err);
    return res.status(200).json({ errors });
  }
};

module.exports.logout = async (req, res) => {
  res.cookie('jwt', '', { maxAge: 1, sameSite: 'Lax' });
  return res.send('Successfully logout');
};
