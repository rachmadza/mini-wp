const bcrypt = require('bcryptjs');

function checkPassword(passBody, passUser) {
  return bcrypt.compareSync(passBody, passUser)
}

module.exports = checkPassword