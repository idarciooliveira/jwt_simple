const jwt = require('jsonwebtoken');
const chalk = require('chalk');
const authConfig = require('../src/auth/auth.json');

const user = {
  id: '1',
  email: 'manuel',
  password: 'kdoakdoakdo',
};

const token = jwt.sign({ id: user.id }, authConfig.secret, {
  expiresIn: 86400,
});

console.log(chalk.bgBlue('token encriptado: ' + token));

jwt.verify(token, authConfig.secret, (err, decoded) => {
  if (err) {
    return console.log(chalk.red('Token Invalido'));
  }
  console.log(chalk.yellow('Token decriptado: ' + decoded.id));
});
