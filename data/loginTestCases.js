const VALID_USERNAME = 'tomsmith';
const VALID_PASSWORD = 'SuperSecretPassword!';

const loginTestCases = [
  {
    name: 'Valid credentials',
    username: VALID_USERNAME,
    password: VALID_PASSWORD,
    expectedText: 'You logged into a secure area!',
    expectedOutcome: 'success',
  },
  {
    name: 'Invalid password',
    username: VALID_USERNAME,
    password: 'wrongPassword!',
    expectedText: 'Your password is invalid!',
    expectedOutcome: 'error',
  },
  {
    name: 'Invalid username',
    username: 'nottomsmith',
    password: VALID_PASSWORD,
    expectedText: 'Your username is invalid!',
    expectedOutcome: 'error',
  },
  {
    name: 'Empty username and password',
    username: '',
    password: '',
    expectedText: 'Your username is invalid!',
    expectedOutcome: 'error',
  },
  {
    name: 'Empty password',
    username: VALID_USERNAME,
    password: '',
    expectedText: 'Your password is invalid!',
    expectedOutcome: 'error',
  },
  {
    name: 'Empty username',
    username: '',
    password: VALID_PASSWORD,
    expectedText: 'Your username is invalid!',
    expectedOutcome: 'error',
  },
];

module.exports = { loginTestCases };
